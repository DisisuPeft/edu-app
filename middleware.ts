import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  // console.log(request)
  // if (request.nextUrl.pathname === "/auth/login" && "/auth/register") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/register"],
};
