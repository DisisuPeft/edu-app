import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // || pathname === "/auth/register"
  if (pathname === "/" /*|| pathname === "/auth/register"*/) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}
// "/auth/register"
export const config = {
  matcher: ["/" /*"/auth/register"*/],
};
