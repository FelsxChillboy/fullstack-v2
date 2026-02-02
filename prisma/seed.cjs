require("dotenv/config");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com";
  const password = await bcrypt.hash("admin12345", 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, password, name: "Admin", role: "ADMIN" },
  });

  console.log("Seeded:", email, "password: admin12345");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
