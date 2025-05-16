import { useState, ChangeEvent, FormEvent } from "react";

// // import { useRouter } from "next/navigation";
// // import { useAppDispatch } from "@/app/redux/hooks";
import { Toast } from "@/alerts/toast";
// // import { useRouteTestMutation } from "@/app/redux/task/taskapiSlice";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateStudentMutation } from "@/redux/estudiante/studentApiSlice";

export default function useCreateStudent() {
  const [ createStudent, {isLoading} ] = useCreateStudentMutation();
  // const { data } = useGetUserEditQuery(i);
  const [formData, setFormData] = useState({
    curp: "",
    matricula: "",
    lugar_nacimiento: null,
    direccion: "",
    tutor_nombre: "",
    tutor_telefono: "",
    activo: null,
    grupo: null,
    email: "",
    user: {
      email: "",
      roleID: [],
      permission: [],
    },
    profile: {
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      edad: "",
      fechaNacimiento: "",
      genero: 0,
      nivEdu: 0,
      telefono: "",
    },
  });
  // useEffect(() => {
  // console.log(data);
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
      curp: "",
      matricula: "",
      lugar_nacimiento: null,
      direccion: "",
      tutor_nombre: "",
      tutor_telefono: "",
      activo: null,
      grupo: null,
      email: "",
      user: {
        email: "",
        roleID: [],
        permission: [],
      },
      profile: {
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        edad: "",
        fechaNacimiento: "",
        genero: 0,
        nivEdu: 0,
        telefono: "",
      },
    });
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const processedValue =
      name === "curp" || name === "matricula" ? value.toUpperCase() : value;

    const keys = name.split(".");
    // console.log(keys)
    if (keys.length === 2) {
      const [parentKey, childKey] = keys;
      // console.log(parentKey, childKey)
      setFormData((prevData) => ({
        ...prevData,
        [parentKey]: {
          ...prevData[parentKey],
          [childKey]: processedValue,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: processedValue,
      }));
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
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
