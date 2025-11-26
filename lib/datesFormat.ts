export function formatDate(isoString, format = "short") {
  const date = new Date(isoString);

  const formats = {
    short: date.toLocaleDateString("es-MX"),
    long: date.toLocaleDateString("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    withTime: date.toLocaleString("es-MX", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
    relative: getRelativeTimeString(date),
  };

  return formats[format] || date.toISOString();
}

export function getRelativeTimeString(date: Date | string | number) {
  let dateObj: Date;
  if (date instanceof Date) {
    dateObj = date;
  } else if (typeof date === "string" || typeof date === "number") {
    dateObj = new Date(date);
  } else {
    return "Fecha Invalida";
  }

  const now: Date = new Date();

  const diffMs = now.getTime() - dateObj.getTime();

  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) return `Hace ${diffMins} minutos`;
  if (diffHours < 24) return `Hace ${diffHours} horas`;
  if (diffDays < 7) return `Hace ${diffDays} días`;

  return dateObj.toLocaleDateString("es-MX");
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(amount);
};
