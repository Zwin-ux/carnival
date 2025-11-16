import type { NextFunction, Request, Response } from "express";
import jwt, { SignOptions, Secret } from "jsonwebtoken";

export interface AuthContext {
  userId: string;
  walletAddress: string;
}

const JWT_SECRET = process.env.AUTH_JWT_SECRET;
const JWT_EXPIRY = process.env.AUTH_JWT_EXPIRY ?? "12h";

if (!JWT_SECRET) {
  console.warn("AUTH_JWT_SECRET is not set. Authentication will fail.");
}

export function signAuthToken(context: AuthContext): string {
  if (!JWT_SECRET) {
    throw new Error("AUTH_JWT_SECRET is required to sign auth tokens");
  }

  const payload = {
    walletAddress: context.walletAddress,
  };
  const options: SignOptions = {
    subject: context.userId,
    expiresIn: JWT_EXPIRY as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET as Secret, options);
}

export function attachAuth(req: Request, _res: Response, next: NextFunction): void {
  if (!JWT_SECRET) {
    next();
    return;
  }

  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    next();
    return;
  }

  const token = header.slice("Bearer ".length).trim();

  try {
    const payload = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    if (!payload || typeof payload !== "object") {
      next();
      return;
    }

    const userId = typeof payload.sub === "string" ? payload.sub : undefined;
    const walletAddress = typeof payload.walletAddress === "string" ? payload.walletAddress : undefined;

    if (!userId || !walletAddress) {
      next();
      return;
    }

    req.auth = { userId, walletAddress };
  } catch (error) {
    console.warn("Failed to verify auth token", error);
  }

  next();
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.auth) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }

  next();
}

export function ensureJwtSecret(): void {
  if (!JWT_SECRET) {
    throw new Error("AUTH_JWT_SECRET must be configured before handling auth routes");
  }
}
