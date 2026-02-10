import "server-only";
import { cookies } from "next/headers";

const COOKIE_NAME = "session";

export async function getSessionCookie() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value ?? null;
}

export async function setSessionCookie(value: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

// alias biar route lama tetap jalan
export const setSession = setSessionCookie;
export const clearSession = clearSessionCookie;
