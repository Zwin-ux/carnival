import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthContext {
  userId: string;
  walletAddress: string;
}

const JWT_SECRET = process.env.AUTH_JWT_SECRET;

function parseAuthToken(token: string): AuthContext | null {
  if (!JWT_SECRET) {
    throw new Error("AUTH_JWT_SECRET is not configured on the web app");
  }

  const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
  const userId = typeof payload.sub === "string" ? payload.sub : undefined;
  const walletAddress = typeof payload.walletAddress === "string" ? payload.walletAddress : undefined;

  if (!userId || !walletAddress) {
    return null;
  }

  return { userId, walletAddress };
}

export async function getServerAuth(): Promise<AuthContext | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const auth = parseAuthToken(token);
    if (!auth) {
      return null;
    }

    return auth;
  } catch {
    return null;
  }
}

export async function requireServerAuth(): Promise<AuthContext> {
  const auth = await getServerAuth();

  if (!auth) {
    redirect("/");
  }

  return auth;
}
