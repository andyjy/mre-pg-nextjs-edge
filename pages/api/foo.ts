import { NextFetchEvent, NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest, context: NextFetchEvent) {
  return new Response("This will never be returned, thanks to middleware.", { status: 200 });
}
