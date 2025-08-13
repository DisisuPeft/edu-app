import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
// import { useAppDispatch } from "@/app/redux/hooks";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
// import { setAuth } from "@/app/redux/features/authSlice";
import { Toast } from "@/alerts/toast";

export default function useRegister() {
  const router = useRouter();
  // const dispatch = useAppDispatch()
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    nombre: "",
    apellidoP: "",
  });

  // const {email, password, password_confirmation, nombre, apellidoP} = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
        // dispatch(setAuth());
        // dispatch(finishInitialLoad())
        Toast({ message: res?.message, icon: "success" });
        router.push("/");
      })
      .catch((error) => {
        // console.log(error)
        Toast({ message: `${error?.data?.error}`, icon: "error" });
      });
  };

  return {
    formData,
    isLoading,
    onChange,
    onSubmit,
  };
}
