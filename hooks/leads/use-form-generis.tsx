import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import {
  useCreateEstatusMutation,
  useCreateFuenteMutation,
  useGetEstatusQuery,
  useUpdateEstatusMutation,
  useUpdateFuenteMutation,
  useGetFuentesQuery,
} from "@/redux/crm/crmApiSlice";
import { Alert } from "@/alerts/toast";

export default function useGenericsForm(tipo: string, item?: any) {
  const [createEstatus] = useCreateEstatusMutation();
  const [updateEstatus] = useUpdateEstatusMutation();
  const [createFuente] = useCreateFuenteMutation();
  const [updateFuente] = useUpdateFuenteMutation();
  const { refetch: refetchEstatus } = useGetEstatusQuery();
  const { refetch: refetchFuentes } = useGetFuentesQuery();
  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
  });
  useEffect(() => {
    if (item) {
      setFormData({
        id: item.id,
        nombre: item.nombre,
      });
    }
  }, [item]);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({
      id: null,
      nombre: "",
    });
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(item ? "update" : "create");
    if (item) {
      tipo === "fuente"
        ? updateFuente(formData)
            .then((res) => {
              // refetch();
              //   console.log(res);
              Alert({ title: "Exito", text: res.data, icon: "success" });
            })
            .catch((error) => {
              // console.log(error);
              Alert({
                title: "Alerta",
                text: error?.data
                  ? "Uno o mas campos estan vacios"
                  : "Error, sin respuesta del servidor",
                icon: "error",
              });
            })
        : updateEstatus(formData)
            .unwrap()
            .then((res) => {
              // refetch();
              Alert({ title: "Exito", text: res, icon: "success" });
            })
            .catch((error) => {
              // console.log(error);
              Alert({
                title: "Alerta",
                text: error?.data
                  ? "Uno o mas campos estan vacios"
                  : "Error, sin respuesta del servidor",
                icon: "error",
              });
            });
    } else {
      tipo === "fuente"
        ? createFuente(formData)
            .then((res) => {
              refetchFuentes();
              reset();
              Alert({ title: "Exito", text: res.data, icon: "success" });
            })
            .catch((error) => {
              // console.log(error);
              Alert({
                title: "Alerta",
                text: error?.data
                  ? "Uno o mas campos estan vacios"
                  : "Error, sin respuesta del servidor",
                icon: "error",
              });
            })
        : createEstatus(formData)
            .unwrap()
            .then((res) => {
              refetchEstatus();
              reset();
              Alert({ title: "Exito", text: res, icon: "success" });
            })
            .catch((error) => {
              // console.log(error);
              Alert({
                title: "Alerta",
                text: error?.data
                  ? "Uno o mas campos estan vacios"
                  : "Error, sin respuesta del servidor",
                icon: "error",
              });
            });
    }
  };
  return {
    formData,
    setFormData,
    onChange,
    onSubmit,
    reset,
  };
}
