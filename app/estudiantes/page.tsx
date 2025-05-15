import StudentsTable from "../ui/estudiantes/students-table";




export default function Page(){
    return (
        <div className="container mx-auto px-4 py-8 text-gray-800 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
                Estudiantes
                </h1>
            </div>
            <StudentsTable/>
        </div>
    )
}