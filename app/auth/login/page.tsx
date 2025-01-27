import LoginForm from "@/app/ui/forms/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Log in',
    description: 'Login page'
}

export default function Page(){
    return <LoginForm/>
}