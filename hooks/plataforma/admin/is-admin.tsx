import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function useIsAdmin() {
  const { data: user } = useRetrieveUserQuery();

  const isAdmin = user?.roleID.some((value) => {
    return value.name === "Administrador";
  });

  return { isAdmin };
}
