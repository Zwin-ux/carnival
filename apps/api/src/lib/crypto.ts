import { createHash } from "crypto";
import { hexToU8a, isHex, stringToU8a } from "@polkadot/util";
import { cryptoWaitReady, signatureVerify } from "@polkadot/util-crypto";

export function canonicalJson(data: object): string {
  return JSON.stringify(data, Object.keys(data).sort());
}

export function hashPayload(data: object): string {
  const canonical = canonicalJson(data);
  const hash = createHash("sha256").update(canonical).digest("hex");
  return `0x${hash}`;
}

let cryptoReady: Promise<void> | null = null;

async function ensureCryptoReady(): Promise<void> {
  if (!cryptoReady) {
    cryptoReady = cryptoWaitReady().then(() => undefined);
  }
  await cryptoReady;
}

export async function verifySignature(payload: string, signature: string, walletAddress: string): Promise<boolean> {
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
