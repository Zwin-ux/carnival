import { Router } from "express";
import { z } from "zod";
import * as DB from "@echoid/db";
import { ensureJwtSecret, requireAuth, signAuthToken } from "../middleware/auth";
import { verifySignature } from "../lib/crypto";

const WalletChallengeRequestSchema = z.object({
  walletAddress: z.string().min(1, "Wallet address required"),
});

const WalletVerifyRequestSchema = z.object({
  walletAddress: z.string().min(1, "Wallet address required"),
  nonce: z.string().min(1, "Nonce required"),
  signature: z.string().min(1, "Signature required"),
});

const { createAuthChallenge, consumeAuthChallenge, ensureUserForWallet } = DB;

export const authRouter = Router();

authRouter.post("/challenge", async (req, res, next) => {
  try {
    const { walletAddress } = WalletChallengeRequestSchema.parse(req.body);
    const { nonce, message, expiresAt } = await createAuthChallenge(walletAddress);

    res.json({
      nonce,
      message,
      expiresAt,
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/verify", async (req, res, next) => {
  try {
    ensureJwtSecret();

    const { walletAddress, signature, nonce } = WalletVerifyRequestSchema.parse(req.body);
    const { message } = await consumeAuthChallenge(walletAddress, nonce);

    const isValid = await verifySignature(message, signature, walletAddress);

    if (!isValid) {
      res.status(400).json({ error: "Invalid signature" });
      return;
    }

    const user = await ensureUserForWallet(walletAddress);

    const token = signAuthToken({
      userId: user.id,
      walletAddress: user.walletAddress,
    });

    res.json({
      token,
      user: {
        id: user.id,
        walletAddress: user.walletAddress,
        handle: user.handle,
      },
      expiresIn: process.env.AUTH_JWT_EXPIRY ?? "12h",
    });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/me", requireAuth, async (req, res, next) => {
  try {
    const user = await ensureUserForWallet(req.auth!.walletAddress);

    res.json({
      user: {
        id: user.id,
        walletAddress: user.walletAddress,
        handle: user.handle,
      },
    });
  } catch (error) {
    next(error);
  }
});
