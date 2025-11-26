// Componente de Input
export default function Input({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-800">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...props}
        className="px-3 py-2 border border-border rounded-lg bg-white text-gray-800 focus:outline focus:ring-2 focus:ring focus:border-transparent transition-all"
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
