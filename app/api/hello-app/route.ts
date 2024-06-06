import { Client } from "pg";

export const runtime = "edge";

export async function GET(request: Request) {
  const pg = new Client(process.env.DATABASE_URL);
  await pg.connect();
  const result = await pg.query("SELECT 1");

  return new Response(`Success!: ${JSON.stringify(result)}`, {
    status: 200,
  });
}
