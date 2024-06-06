import { NextFetchEvent, NextRequest } from "next/server";
// import { Client } from "pg";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

export const config = {
  runtime: "edge",
};

export default async function handler(
  req: NextRequest,
  context: NextFetchEvent
) {
  // const pg = new Client(process.env.DATABASE_URL);
  // await pg.connect();
  // const result = await pg.query("SELECT 1");

  const connectionString = `${process.env.DATABASE_URL}`;

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const result = await prisma.demo.findFirst();

  return new Response(`Hello World! ${JSON.stringify(result)}`, {
    status: 200,
  });
}
