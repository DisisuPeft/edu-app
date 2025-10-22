import { Material } from "@/redux/features/admin/types";
import { useDeleteFileMutation } from "@/redux/features/admin/fileApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useRetrieveFilesQuery } from "@/redux/features/admin/fileApiSlice";

interface Props {
  material: Material;
  onCancel: (value: boolean) => void;
  id?: string;
}

export default function DeleteFiles({ material, onCancel, id }: Props) {
  const { refetch } = useRetrieveFilesQuery(parseInt(id));
  const [deleteFile] = useDeleteFileMutation();
  const dispatch = useAppDispatch();

  const onConfirm = (id: number) => {
    deleteFile(id)
      .unwrap()
      .then((res) => {
        dispatch(setAlert({ message: res, type: "success" }));
        onCancel(false);
        refetch();
        // console.log(res);
      })
      .catch(() => {
        dispatch(
          setAlert({
            message: "El archivo no pudo ser eliminado",
            type: "error",
          })
        );
      });
  };
  return (
    <div className="p-6 mx-4 text-center text-black">
      <h2 className="text-2xl font-semibold mb-4 p-4">¿Estás seguro?</h2>
      <p className="mb-6 text-gray-600">
        <span className="font-medium">{material?.file?.name}</span> sera
        eliminado y no podrás deshacerlo.
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onCancel(false)}
          className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancelar
        </button>
        <button
          onClick={() => onConfirm(material?.id)}
          className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
