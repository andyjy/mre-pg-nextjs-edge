import { NextFetchEvent, NextRequest } from "next/server";
import { Client } from "pg";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest, context: NextFetchEvent) {
  const pg = new Client();
  return new Response("Hello World!", { status: 200 });
}
