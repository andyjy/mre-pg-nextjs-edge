// import { Client } from "pg";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

export const runtime = "edge";

export async function GET(request: Request) {
  // const pg = new Client(process.env.DATABASE_URL);
  // await pg.connect();
  // const result = await pg.query("SELECT 1");

  const connectionString = `${process.env.DATABASE_URL}`;

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const result = await prisma.demo.findFirst();

  return new Response(`Success!: ${JSON.stringify(result)}`, {
    status: 200,
  });
}
