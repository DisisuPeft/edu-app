import { useState, ChangeEvent, FormEvent } from "react";

// // import { useRouter } from "next/navigation";
// // import { useAppDispatch } from "@/app/redux/hooks";
import { Toast } from "@/alerts/toast";
// // import { useRouteTestMutation } from "@/app/redux/task/taskapiSlice";
import { useEditUsersMutation } from "@/redux/cea/CeaApiSlice";
import { useGetUserEditQuery } from "@/redux/cea/CeaApiSlice";
import { useEffect } from "react";

export default function useEditUser(id: number) {
  const [editUsers, { isLoading }] = useEditUsersMutation();
  const { data } = useGetUserEditQuery(id);
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    edad: 0,
    fechaNacimiento: "",
    genero: null,
    nivEdu: null,
    telefono: null,
  });
  // useEffect(() => {
  console.log(data);
  // });
  // const {
  //   email,
  //   nombre,
  //   apellidoP,
  //   apellidoM,
  //   edad,
  //   fechaNacimiento,
  //   genero,
  //   nivEdu,
  //   telefono,
  // } = formData;
  //     // console.log(name, description)
  const reset = () => {
    setFormData({
      email: "",
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      edad: 0,
      fechaNacimiento: "",
      genero: null,
      nivEdu: null,
      telefono: null,
    });
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("editar");
    // createTask(formData)
    //   .unwrap()
    //   .then(() => {
    //     // console.log()
    //     reset();
    //     Toast({ message: "Tarea creada!", icon: "success" });
    //   })
    //   .catch((error) => {
    //     // console.log(error)
    //     Toast({
    //       message:
    //         error?.data?.name[0] || error?.data?.description[0]
    //           ? "Uno o mas campos estan vacios"
    //           : "Error, sin respuesta del servidor",
    //       icon: "error",
    //     });
    //   });
  };

  return {
    formData,
    isLoading,
    onChange,
    onSubmit,
    reset,
  };
}
