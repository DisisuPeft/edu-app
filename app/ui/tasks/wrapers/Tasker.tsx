'use client'

import { Modal } from "@/components/common/Modal"
import TaskForm from "../../forms/TaskForm"
import { useState } from "react"
import { CircleX } from "lucide-react"
export default function Tasker({title}: {title: string}){
    // console.log(visible)
    const [visible, setVisible] = useState(false)
    return (
        <div
        className="
        flex flex-col justify-center 
        rounded-xl w-[150px] h-[150px] 
        bg-gradient-to-br from-blue-400 to-blue-600
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:-translate-y-1
        cursor-pointer
        overflow-hiddenS
        "
        onClick={()=>{setVisible(true)}}
        >
            <div className="flex items-center h-auto justify-center p-4">
                <p
                className="
                text-white text-xl font-semibold
                transition-all duration-300 ease-in-out
                hover:scale-105
                "
                >
                    {title}
                </p>
            </div>
            <Modal show={visible} onClose={()=>setVisible(false)}>
                <div className="flex justify-end item-center pr-2 pt-2">
                    <button className="rounded-full text-black p-3" onClick={()=>setVisible(false)}>
                        <div><CircleX size={40}/></div>
                    </button>
                </div>
                <TaskForm/>
            </Modal>
        </div>
    )
}