import { apiSlice } from "../../services/apiSlice";
import { CiclosResponse } from "./types";

const calendarioApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCiclos: builder.query<CiclosResponse, void>({
      query: () => "/control-escolar/ciclos/all/",
    }),
  }),
});

export const { useGetCiclosQuery } = calendarioApiSlice;
