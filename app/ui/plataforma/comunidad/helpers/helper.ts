export function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const diff = (Date.now() - date.getTime()) / 1000; // s
  if (diff < 60) return "Justo ahora";
  const m = Math.floor(diff / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} d`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo} mes` + (mo > 1 ? "es" : "");
  const y = Math.floor(mo / 12);
  return `${y} año` + (y > 1 ? "s" : "");
}

export function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}
