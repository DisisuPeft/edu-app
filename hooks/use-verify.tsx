
import { useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hooks";
import {setAuth, finishInitialLoad, logout} from "@/app/redux/features/authSlice"
import { useVerifyMutation } from "@/app/redux/features/authApiSlice";

export default function useVerify(){
    const dispatch = useAppDispatch()
    const [verify] = useVerifyMutation()
    // console.log(isLoading)
    // useEffect(() => {
    //     verify(undefined).unwrap().then(() =>{
    //         dispatch(setAuth())
    //     })
    //     .finally(() => {
    //         dispatch(finishInitialLoad())
    //     });
    // }, [])
    useEffect(() => {
        verify(undefined)
            .unwrap()
            .then(() => {
                // Si el backend valida el token, activa la autenticación
                dispatch(setAuth());
            })
            .finally(() => {
                // Indica que la carga inicial terminó, independientemente del resultado
                dispatch(finishInitialLoad());
            });
    }, []);
    // return {isLoading}
}
