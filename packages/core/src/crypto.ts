import { createHash } from "crypto";
import { cryptoWaitReady, signatureVerify } from "@polkadot/util-crypto";
import { hexToU8a, isHex, stringToU8a } from "@polkadot/util";

/**
 * Cryptographic utilities for EchoID Carnival
 * Handles hashing and signature verification
 */

/**
 * Hash a payload object to hex string
 * Uses SHA-256 for consistency
 */
export function canonicalJson(data: object): string {
  return JSON.stringify(data, Object.keys(data).sort());
}

export function hashPayload(data: object): string {
  const canonical = canonicalJson(data);
  const hash = createHash("sha256").update(canonical).digest("hex");
  return `0x${hash}`;
}

/**
 * Convert buffer to base64 string safely
 */
export function safeBase64(input: string | Buffer): string {
  if (typeof input === "string") {
    return Buffer.from(input).toString("base64");
  }
  return input.toString("base64");
}

/**
 * Verify a signature against payload and wallet address
 */
let cryptoReady: Promise<boolean> | null = null;

async function ensureCryptoReady(): Promise<void> {
  if (!cryptoReady) {
    cryptoReady = cryptoWaitReady();
  }
  await cryptoReady;
}

export async function verifySignature(
  payload: string,
  signature: string,
  walletAddress: string
): Promise<boolean> {
  if (!payload || !signature || !walletAddress) {
    return false;
  }

  try {
    await ensureCryptoReady();
    const payloadBytes = isHex(payload) ? hexToU8a(payload) : stringToU8a(payload);
    const { isValid } = signatureVerify(payloadBytes, signature, walletAddress);
    return isValid;
  } catch (error) {
    console.error("Signature verification failed", error);
    return false;
  }
}

/**
 * Generate a deterministic hash from session data
 */
export function generateSessionHash(sessionId: string, timestamp: number): string {
  return hashPayload({ sessionId, timestamp });
}
