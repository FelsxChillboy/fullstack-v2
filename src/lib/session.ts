import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "session";
const SECRET = process.env.SESSION_SECRET || "dev-secret-change";

function sign(userId: string) {
  return crypto.createHmac("sha256", SECRET).update(userId).digest("hex");
}

export function setSession(userId: string) {
  const value = `${userId}.${sign(userId)}`;
  cookies().set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export function getSessionUserId(): string | null {
  const raw = cookies().get(COOKIE_NAME)?.value;
  if (!raw) return null;
  const [userId, sig] = raw.split(".");
  if (!userId || !sig) return null;
  if (sign(userId) !== sig) return null;
  return userId;
}

export function clearSession() {
  cookies().set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
}
