import { useState, ChangeEvent, FormEvent } from "react";

// // import { useRouter } from "next/navigation";
// // import { useAppDispatch } from "@/app/redux/hooks";
import { Toast } from "@/alerts/toast";
// // import { useRouteTestMutation } from "@/app/redux/task/taskapiSlice";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { User } from "@/redux/interface/authentication/Users";
import { useGetRolesQuery } from "@/redux/catalogos/CatApiSlice";

export default function useEditUser(id: number) {
  const [editUsers, { isLoading }] = useEditUsersMutation();
  const { data } = useGetUserEditQuery(id);
  const {data:roles} = useGetRolesQuery()
  const [formData, setFormData] = useState<User>({
    id: 0,
    email: "",
    rol: [],
    permission: [],
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
  useEffect(() => {
    if(data) {
      setFormData((prev) => ({
        ...prev,
        id: data?.id,
        email: data?.email,
        role: data?.rol?.map((item) => item.id),
        profile: {
          ...prev.profile,
          nombre: data.profile?.nombre ?? "",
          apellidoP: data.profile?.apellidoP ?? "",
          apellidoM: data.profile?.apellidoM ?? "",
          edad: data.profile?.edad ?? "",
          fechaNacimiento: data.profile?.fechaNacimiento,
          genero: data.profile?.genero,
          nivEdu: data.profile?.nivEdu,
          telefono: data.profile?.telefono ?? "",
        },
      }))
    }
  }, [data]);
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
      id: 0,
      email: "",
      rol: [],
      permission: [],
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
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = event.target;
  
    if (type === "checkbox" && name === "role") {
      const checked = (event.target as HTMLInputElement).checked
      const selectedRol = roles?.find((rol) => rol.id === parseInt(value));
      if (!selectedRol) return;
  
      setFormData((prev) => ({
        ...prev,
        rol: checked
          ? [...prev.rol, selectedRol]
          : prev.rol.filter((r) => r.id !== selectedRol.id),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [name]: name === "edad" ? parseInt(value) || "" : value,
        },
      }));
    }
  };
  // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const checked = event.target.checked
  //   const { name, value } = event.target;
  //   const selectedRol = roles?.find((rol) => rol.id === parseInt(value))
  //   console.log(name, value)
  //   if (!selectedRol) return;

  //   setFormData((prev) => ({
  //     ...prev,
  //     rol: checked ? [...prev.rol, selectedRol] : prev.rol.filter((r) => r.id !== selectedRol.id),
  //     profile: {
  //       ...prev.profile,
  //       [name]: value,
  //     },
  //   }));
  // };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(formData);
    editUsers(formData)
      .unwrap()
      .then((res) => {
        console.log(res)
    //     reset();
    //     Toast({ message: "Tarea creada!", icon: "success" });
      })
      .catch((error) => {
        console.log(error)
    //     Toast({
    //       message:
    //         error?.data?.name[0] || error?.data?.description[0]
    //           ? "Uno o mas campos estan vacios"
    //           : "Error, sin respuesta del servidor",
    //       icon: "error",
    //     });
      });
  };

  return {
    formData,
    setFormData,
    isLoading,
    onChange,
    onSubmit,
    reset,
  };
}
