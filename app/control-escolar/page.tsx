export default function Page() {
  return (
    <div className="flex justify-center items-center p-6 md:ml-[30px] w-full">
      <div className="flex-row">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Bienvenido al Sistema de Control Escolar
        </h2>
        <p className="text-gray-500 max-w-md text-center">
          Selecciona un módulo del menú lateral para comenzar a gestionar la
          información escolar.
        </p>
      </div>
    </div>
  );
}
