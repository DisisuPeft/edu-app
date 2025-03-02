import Tasker from "@/app/ui/tasks/wrapers/Tasker"
// import TaskForm from "@/app/ui/forms/TaskForm"
// import Link from "next/link"
// import { Modal } from "@/app/components/common/Modal"
export default function Page(){
    const tasker = [
        {title: "Create Task", isOpen: false},
        {title: "Create Plan", isOpen: false}
    ]
    return (
        <div className="flex justify-start items-center gap-10">
            {tasker.map((maker) => {
                return (
                    <div key={maker.title} className="flex flex-col">
                        <Tasker title={maker.title} />
                        {/* <TaskForm show={maker.isOpen}/> */}
                    </div>
                )
            })}
        </div>
    )
}