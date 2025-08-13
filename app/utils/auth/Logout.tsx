"use client";
import { useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { PowerIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import { apiSlice } from "@/redux/services/apiSlice";
// import Loading from '@/components/common/Loading';
// import Loading from '@/components/common/Loading';
export default function Logout() {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  // const [isLogout, setIsLogout] = useState(false)
  const handleLogout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
        dispatch(apiSlice.util.resetApiState());
      });
  };
  return (
    <form onSubmit={handleLogout}>
      <button className="flex h-[50px] grow items-center justify-center gap-2 rounded-md p-3 bg-[#a20519] text-white md:flex-none md:p-2 md:px-3">
        {/* <div className="flex justify-center"> */}
        <PowerIcon className="w-6" />
        {/* </div> */}
        <div className="hidden md:block">Cerrar sesion</div>
      </button>
    </form>
  );
}
