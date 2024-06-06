import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { Client } from "pg";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/foo")) {
    // const pg = new Client();
    return NextResponse.redirect(new URL("/", request.url));
  }
}
