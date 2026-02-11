import "server-only";
import { cookies } from "next/headers";

const COOKIE_NAME = "session";

export async function getSessionCookie() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value ?? null;
}

export async function setSession(userId: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, userId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
