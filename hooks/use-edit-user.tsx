import { useState, ChangeEvent, FormEvent } from "react";

// // import { useRouter } from "next/navigation";
// // import { useAppDispatch } from "@/app/redux/hooks";
import { Toast, Alert } from "@/alerts/toast";
// // import { useRouteTestMutation } from "@/app/redux/task/taskapiSlice";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { User } from "@/redux/interface/authentication/Users";
import { useGetRolesQuery, useGetPermissionQuery } from "@/redux/catalogos/CatApiSlice";

interface Props {
  id: number | undefined;
  onClose?: (event: boolean) => void
}

// Se debe revisar este formulario porque no cambia 
export default function useEditUser({id, onClose}: Props) {

  const [editUsers, { isLoading }] = useEditUsersMutation();
  const { data, refetch } = useGetUserEditQuery(id);
  const {data:roles} = useGetRolesQuery()
  const {data:permissions} = useGetPermissionQuery()
  const [formData, setFormData] = useState<User>({
    id: 0,
    email: "",
    roleID: [],
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
        roleID: Array.isArray(data?.roleID)
        ? data.roleID
        : data?.roleID
        ? [data.roleID]
        : [],
        permission: Array.isArray(data?.permission)
        ? data.permission
        : data?.permission
        ? [data.permission]
        : [],
        profile: {
          ...prev.profile,
          nombre: data.profile?.nombre ?? "",
          apellidoP: data.profile?.apellidoP ?? "",
          apellidoM: data.profile?.apellidoM ?? "",
          edad: data.profile?.edad ?? "",
          fechaNacimiento: data.profile?.fechaNacimiento,
          genero: data.profile?.genero_info?.id,
          nivEdu: data.profile?.nivEdu_info?.id,
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
      roleID: [],
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
  // permission: checked ? [...prev.permission, selectedP] : prev.permission.filter((p) => p.id !== selectedP.id)
  // const selectedP = permissions?.find((p) => p.id === parseInt(value))
  // if (!selectedP) return;
  //No actualiza permisos
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = event.target;
    // console.log(name, value)
    if (type === "checkbox" && name === "role") {
      const checked = (event.target as HTMLInputElement).checked
      const selectedRol = roles?.find((rol) => rol.id === parseInt(value));
      if (!selectedRol) return;
      setFormData((prev) => ({
        ...prev,
        roleID: checked
          ? [...prev.roleID, selectedRol]
          : prev.roleID.filter((r) => r.id !== selectedRol.id),
      }));
    } 
    else if(type === "checkbox" && name === "permission"){
      const checked = (event.target as HTMLInputElement).checked
      const selectedP = permissions?.find((p) => p.id === parseInt(value))
      if (!selectedP) return;
      setFormData((prev) => ({
        ...prev,
        permission: checked ? [...prev.permission, selectedP] : prev.permission.filter((p) => p.id !== selectedP.id)
      }));
    }
    else {
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
        // console.log(res)
        onClose(false)
        refetch()
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
