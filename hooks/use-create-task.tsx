import { useState, ChangeEvent, FormEvent } from "react";
// // import { useRouter } from "next/navigation";
// // import { useAppDispatch } from "@/app/redux/hooks";
import { Toast } from "@/alerts/toast";
// // import { useRouteTestMutation } from "@/app/redux/task/taskapiSlice";
import { useCreateTaskMutation } from "@/app/redux/task/taskapiSlice";

export default function useCreateTask(){
//     // const router = useRouter()
//     // const dispatch = useAppDispatch()
    const [createTask, {isLoading}] = useCreateTaskMutation()
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const {name, description} = formData
//     // console.log(name, description)
    const reset = () => {
        setFormData({name: "", description: ""})
    }
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        // console.log(name, value)
        setFormData({...formData, [name]: value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createTask(formData).unwrap().then(() => {
            // console.log()
            reset();
            Toast({message: "Tarea creada!", icon: "success"});
        }).catch((error) => {
            // console.log(error)
            Toast({message: error?.data?.name[0] || error?.data?.description[0] ? "Uno o mas campos estan vacios": "Error, sin respuesta del servidor", icon: "error"})
        })
    }

    return {
        name,
        description,
        isLoading,
        onChange,
        onSubmit
    }
}