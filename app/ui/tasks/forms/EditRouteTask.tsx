'use client'
import { useMemo } from "react"
import dynamic from "next/dynamic"
import { Loader } from "lucide-react"

export default function EditRouteTask(){
    const Map = useMemo(() => dynamic(
        () => import('@/app/ui/map/Map'),
        {
            loading: () => <Loader/>,
            ssr: false,
        }
    ), [])
    return (
        <>  
            <div className="flex justify-start"><p className="text-black font-bold text-xl">Crear marcadores</p></div>
            {/* <form className="flex flex-col gap-[30px]" onSubmit={submit}> */}
                <Map/>
                {/* <div className="flex justify-end">
                    <button className="bg-slate-950 rounded-md w-[100px] p-2" type="submit">Guardar</button>
                </div>
            </form> */}
        </>
    )
}