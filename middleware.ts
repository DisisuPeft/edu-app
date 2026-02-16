// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const MAINTENANCE_MODE = true;

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Si estamos en mantenimiento y NO está en la página de mantenimiento → redirige
//   if (MAINTENANCE_MODE && pathname !== "/maitenance") {
//     const mantenimientoUrl = new URL("/maitenance", request.url);
//     return NextResponse.redirect(mantenimientoUrl);
//   }

//   // Si no está en mantenimiento, sigue normalmente
//   return NextResponse.next();
// }

// // Se aplica a TODAS las rutas del proyecto
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };

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
    /^\/plataforma\/estudiantes\/update\/(\d+)\/?$/,
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

  const editDiplomadoMatch = pathname.match(
    /^\/plataforma\/diplomados\/(\d+)\/edit\/?$/,
  );
  if (editDiplomadoMatch) {
    const rawId = editDiplomadoMatch[1];
    if (!/^\d+$/.test(rawId)) {
      return NextResponse.next();
    }
    const encoded = encodePayload({ id: rawId });
    url.pathname = `/plataforma/diplomados/${encoded}/edit`;
    return NextResponse.redirect(url);
  }

  const pagosMatch = pathname.match(/^\/plataforma\/pagos\/(\d+)\/pago\/?$/);
  if (pagosMatch) {
    const rawId = pagosMatch[1];
    if (!/^\d+$/.test(rawId)) {
      return NextResponse.next();
    }
    const encoded = encodePayload({ id: rawId });
    url.pathname = `/plataforma/pagos/${encoded}/pago`;
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
    "/plataforma/diplomados/:id(\\d+)/edit",
    "/plataforma/pagos/:id(\\d+)/pago",
  ],
};
