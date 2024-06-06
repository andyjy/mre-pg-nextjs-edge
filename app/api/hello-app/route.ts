import { Client } from "pg";

export const runtime = "edge";

export async function GET(request: Request) {
  const pg = new Client();

  return new Response("Success!", {
    status: 200,
  });
}
