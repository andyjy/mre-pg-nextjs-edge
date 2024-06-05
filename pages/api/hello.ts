import { NextFetchEvent, NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest, context: NextFetchEvent) {
  return new Response("Hello World!", { status: 200 });
}
