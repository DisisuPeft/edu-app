import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useEffect, useState } from "react";

export default function useCheckPerfil() {
  const { data: user } = useRetrieveUserQuery();

  //   const [isProfileEmpty, setProfileEmpty] = useState(false);

  const isProfileEmpty = Object.values(user?.profile || {}).some(
    (value) => value === null
  );

  return { isProfileEmpty };
}
