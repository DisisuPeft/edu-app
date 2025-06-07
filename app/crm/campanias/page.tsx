import CampanasList from "@/app/ui/crm/campanias/campanias-list";

export default function Page() {
  return (
    <div className="p-6 md:ml-64">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Gestión de Leads
      </h1>
      <CampanasList />
    </div>
  );
}
