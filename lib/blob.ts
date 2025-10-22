export function encodePayload(obj: { id: string }) {
  const json = JSON.stringify(obj);
  // En Node.js o Edge Runtime usa Buffer
  if (typeof Buffer !== "undefined") {
    return Buffer.from(json, "utf8").toString("base64url");
  }
  // En el navegador
  return btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodePayload(d: string) {
  try {
    // Si es numérico crudo, simplemente retorna
    if (/^\d+$/.test(d)) return { id: d };

    let base64 = d.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) base64 += "=";

    const json =
      typeof Buffer !== "undefined"
        ? Buffer.from(base64, "base64").toString("utf8")
        : decodeURIComponent(escape(atob(base64)));

    return JSON.parse(json);
  } catch {
    return { id: "0" };
  }
}

// export function encodePayload(obj: { id: string }) {
//   const json = JSON.stringify(obj);

//   // Navegador
//   if (typeof window !== "undefined") {
//     // base64 normal
//     const b64 = btoa(unescape(encodeURIComponent(json)));
//     // convertir a base64url (URL-safe)
//     return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
//   }

//   // Server (Node / Next middleware)
//   // 'base64url' evita + / =
//   return Buffer.from(json, "utf8").toString("base64url");
// }

// export function decodePayload(input: string): { id: string } {
//   try {
//     // 1) Si viene un número crudo, úsalo tal cual
//     if (/^\d+$/.test(input)) return { id: input };

//     // 2) Normaliza base64url -> base64 y re-agrega padding
//     let b64 = input.replace(/-/g, "+").replace(/_/g, "/");
//     while (b64.length % 4) b64 += "=";

//     // 3) Decodifica
//     const json =
//       typeof window === "undefined"
//         ? Buffer.from(b64, "base64").toString("utf8")
//         : decodeURIComponent(escape(atob(b64)));

//     return JSON.parse(json);
//   } catch {
//     return { id: "0" };
//   }
// }
