'use client'

import { useVerify } from "@/hooks"
import Loading from "@/app/components/common/Loading"
import { useAppSelector } from "@/redux/hooks";
import { Modal } from "@/app/components/common/Modal";

export default function Setup(){
    useVerify()
    const { isLoading } = useAppSelector(state => state.auth)
    // console.log(isLoading)
    return <Modal show={isLoading} onClose={() => isLoading} transparent={true}>                    
                {/* <div className="p-[50px]"> */}
                    <Loading/>
                {/* </div> */}
            </Modal>
}