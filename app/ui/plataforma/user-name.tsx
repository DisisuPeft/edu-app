"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

interface UserCardProps {
  title: string;
}

export default function UserName({ title }: UserCardProps) {
  const { data, error, isLoading } = useRetrieveUserQuery();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <p>Fail to user fetch</p>;
  }

  return `${title} ${data?.profile?.nombre} ${data?.profile?.apellidoP} ${
    data?.profile?.apellidoM === null ? "" : data?.profile?.apellidoM
  }`;
}
