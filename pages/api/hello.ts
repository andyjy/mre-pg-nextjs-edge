import { NextFetchEvent, NextRequest } from "next/server";
import { Client } from "pg";

export const config = {
  runtime: "edge",
};

export default async function handler(
  req: NextRequest,
  context: NextFetchEvent
) {
  const pg = new Client(process.env.DATABASE_URL);
  await pg.connect();
  const result = await pg.query("SELECT 1");

  return new Response(`Hello World! ${JSON.stringify(result)}`, {
    status: 200,
  });
}
