import TasksList from "../ui/tasks/lists/TasksList";

export default function Page(){
    return (
        <div className="flex flex-col items-center max-w-[800px] gap-[100px]">
            <div className="flex items-center justify-center w-[400px] bg-sky-500 rounded-lg">
                <p className="text-white font-bold text-2xl font-mono p-2">Tareas</p>
            </div>
            <div className="flex items-center justify-center">
                <TasksList/>
            </div>
        </div>
    )
}