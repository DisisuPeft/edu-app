// Componente de Card
export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-card border border-border rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
