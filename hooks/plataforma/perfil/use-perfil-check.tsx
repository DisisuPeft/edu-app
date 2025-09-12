import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useEffect, useState } from "react";

export default function useCheckPerfil() {
  const { data: user } = useRetrieveUserQuery();

  let isProfileEmpty = false;

  const is_admin = Object.values(user?.roleID || {}).some(
    (value) => value.name === "Administrador"
  );

  if (!is_admin) {
    isProfileEmpty = Object.values(user?.profile || {}).some(
      (value) => value === null
    );
  }

  return { isProfileEmpty };
}
