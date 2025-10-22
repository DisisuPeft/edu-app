// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   // || pathname === "/auth/register"
//   if (pathname === "/" || pathname === "/auth/register") {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   return NextResponse.next();
// }
// // "/auth/register"
// export const config = {
//   matcher: ["/", "/auth/register"],
// };
// middleware.ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { encodePayload } from "./lib/blob";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (pathname === "/" || pathname === "/auth/register") {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  const cursomatch = pathname.match(/^\/plataforma\/cursos\/(\d+)$/);
  if (cursomatch) {
    const rawId = cursomatch[1];
    if (!/^\d+$/.test(rawId)) {
      return NextResponse.next();
    }
    const encoded = encodePayload({ id: rawId });
    url.pathname = `/plataforma/cursos/${encoded}`;
    return NextResponse.redirect(url);
  }

  const diplomadosmatch = pathname.match(/^\/plataforma\/diplomados\/(\d+)$/);
  if (diplomadosmatch) {
    const rawId = diplomadosmatch[1];
    if (!/^\d+$/.test(rawId)) {
      return NextResponse.next();
    }
    const encoded = encodePayload({ id: rawId });
    url.pathname = `/plataforma/diplomados/${encoded}`;
    return NextResponse.redirect(url);
  }

  const estudiantesMatch = pathname.match(
    /^\/plataforma\/estudiantes\/update\/(\d+)\/?$/
  );
  if (estudiantesMatch) {
    const rawId = estudiantesMatch[1];
    if (!/^\d+$/.test(rawId)) {
      return NextResponse.next();
    }
    const encoded = encodePayload({ id: rawId });
    url.pathname = `/plataforma/estudiantes/update/${encoded}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/auth/register",
    "/cursos/:id(\\d+)",
    "/plataforma/cursos/:id(\\d+)",
    "/diplomados/:id(\\d+)",
    "/plataforma/diplomados/:id(\\d+)",
    "/plataforma/estudiantes/update/:id(\\d+)",
  ],
};
