import { randomBytes } from "crypto";
import type { User } from "@prisma/client";
import { prisma } from "./client";

const DEFAULT_TTL_SECONDS = parseInt(process.env.AUTH_CHALLENGE_TTL ?? "300", 10);

function buildExpiry(ttlSeconds: number): Date {
  const ttl = Number.isFinite(ttlSeconds) && ttlSeconds > 0 ? ttlSeconds : 300;
  return new Date(Date.now() + ttl * 1000);
}

export async function createAuthChallenge(walletAddress: string): Promise<{
  nonce: string;
  message: string;
  expiresAt: Date;
}> {
  const nonce = randomBytes(32).toString("hex");
  const expiresAt = buildExpiry(DEFAULT_TTL_SECONDS);
  const message = `EchoID Carnival Sign-In\nWallet: ${walletAddress}\nNonce: ${nonce}\nExpires: ${expiresAt.toISOString()}`;

  // Cleanup stale challenges for this wallet
  await prisma.authChallenge.deleteMany({
    where: {
      walletAddress,
      expiresAt: {
        lt: new Date(),
      },
    },
  });

  await prisma.authChallenge.create({
    data: {
      walletAddress,
      nonce,
      message,
      expiresAt,
    },
  });

  return { nonce, message, expiresAt };
}

export async function consumeAuthChallenge(walletAddress: string, nonce: string): Promise<{
  message: string;
}> {
  const record = await prisma.authChallenge.findUnique({
    where: { nonce },
  });

  if (!record || record.walletAddress !== walletAddress) {
    throw new Error("Challenge not found");
  }

  if (record.expiresAt.getTime() < Date.now()) {
    await prisma.authChallenge.delete({ where: { nonce } });
    throw new Error("Challenge expired");
  }

  await prisma.authChallenge.delete({ where: { nonce } });
  return { message: record.message };
}

export async function ensureUserForWallet(walletAddress: string): Promise<User> {
  let user = await prisma.user.findUnique({
    where: { walletAddress },
  });

  if (user) {
    return user;
  }

  const shortAddress = `${walletAddress.slice(0, 6)}…${walletAddress.slice(-4)}`;

  user = await prisma.user.create({
    data: {
      walletAddress,
      handle: shortAddress,
      displayName: shortAddress,
    },
  });

  return user;
}
