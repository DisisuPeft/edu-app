import UserCreateForm from "@/app/components/admin/user-model";

export default function Page() {
  return (
    <div className="space-y-8 py-[80px]">
      <div className="flex flex-row max-w-[600px]">
        {/* <div className="flex justify-center items-center">
          <Link
           
            className="inline-flex items-center text-gray-800 hover:text-gray-900 ml-4 rounded-full p-4"
          >
            <ArrowLeftIcon className="h-[40px] w-[30px] mr-2" />
          </Link>
        </div> */}
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-3xl font-bold text-gray-900">Nuevo usuario</h1>
        </div>
      </div>
      <UserCreateForm />
    </div>
  );
}
