// import { useParams } from "next/navigation"
import EditTask from "@/app/ui/tasks/forms/EditTask";
import EditRouteTask from "@/app/ui/tasks/forms/EditRouteTask";

export default function Page(){
    // const task_id = params?.id ?? 0
    // console.log(task_id)

    return (
        <div className="flex flex-col w-full gap-[50px]">
            <EditTask />
            {/* <div className="flex flex-row items-center justify-center gap-[50px]"> */}
                <EditRouteTask/>
                {/* <Card title={formData.estimated_distance}/> */}
            {/* </div> */}
        </div>
    )
}