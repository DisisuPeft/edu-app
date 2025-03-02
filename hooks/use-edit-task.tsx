import { Task } from "@/app/redux/interface/TasksInterfaces";
import { useUpdateTaskMutation } from "@/app/redux/task/taskapiSlice";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useParams } from "next/navigation"
import { useEditTaskQuery } from "@/app/redux/task/taskapiSlice";
import { Alert } from "@/alerts/toast";

export default function useEditTask(){
    const [updateTask, {isLoading}] = useUpdateTaskMutation() 
    const params = useParams()
    const taskID = Array.isArray(params.id) ? params.id[0] : params.id;
    const {data: task} = useEditTaskQuery(taskID ? parseInt(taskID): 0)
    // console.log(task)
    // Crear una tabla para guardar la longitud y latitud de un lugar, ejemplo TGZ l: 16.7510 lo: -93.1150
    const [formData, setFormData] = useState<Task>({
        id: 0,
        name: "",
        description: "",
        // origin: 0,
        // destination: 0,
        coordinates: null,
        waypoints: null,
        estimated_distance: 0,
        estimated_time: 0,
        status: 0,
        start_time: "",
        end_time: "",
        actual_time: "",
        actual_distance: 0,
        vehicles: null,
        plans: null,
        created_at: "",
        updated_at: "",
    })
    useEffect(() => {
        if (task) {
            setFormData((prev) => ({
                ...prev,
                id: task?.id ?? 0,
                name: task?.name ?? "",
                description: task?.description ?? "",
                status: task?.status ?? 0,
                start_time: task?.start_time ?? "",
                end_time: task?.end_time ?? "",
                actual_time: task?.actual_time ?? "",
                actual_distance: task?.actual_distance ?? 0,
                vehicles: task?.vehicles ?? null,
                plans: task?.plans ?? null,
                created_at: task?.created_at ?? "",
                updated_at: task?.updated_at ?? "",
            }));
        }
    }, [task]);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
        // console.log(name, value)
        // setFormData({...formData, [name]: value})
    }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    const submit = () => {
        console.log(formData)
        Alert({title: "Exito", text: "Ruta creada", icon: "success"})
    }

    return {
        formData,
        isLoading,
        onSubmit,
        onChange,
        setFormData,
        submit
    }
}