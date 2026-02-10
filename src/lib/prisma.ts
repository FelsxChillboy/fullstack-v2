import "server-only";

import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// SSL hanya dipakai kalau DATABASE_URL mengindikasikan butuh SSL
const needsSsl =
  process.env.DATABASE_URL?.includes("sslmode=require") ||
  process.env.DATABASE_URL?.includes("ssl=true");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: needsSsl ? { rejectUnauthorized: false } : undefined,
});

const adapter = new PrismaPg(pool);

export const prisma =
  global.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
