import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Client } from "pg";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/foo")) {
    const pg = new Client(process.env.DATABASE_URL);
    await pg.connect();
    const result = await pg.query("SELECT 1 as foo");
    return NextResponse.redirect(
      new URL(`/?${result?.rows?.[0]?.foo}`, request.url)
    );
  }
}
