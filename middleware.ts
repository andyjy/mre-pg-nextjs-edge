import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { Client } from "pg";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/foo")) {
    // const pg = new Client(process.env.DATABASE_URL);
    // await pg.connect();

    const connectionString = `${process.env.DATABASE_URL}`;

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    const result = await prisma.demo.findFirst();

    return NextResponse.redirect(
      new URL(`/?value=${result?.value}`, request.url)
    );
  }
}
