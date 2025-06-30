// import { apiSlice } from "../../services/apiSlice";
// import { CicloResponse, CiclosResponse } from "./types";

// const calendarioApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getCiclos: builder.query<CiclosResponse, void>({
//       query: () => "/control-escolar/ciclos/all/",
//     }),
//     getCiclosParams: builder.query<CicloResponse[], void>({
//       query: () => "/control-escolar/ciclos/get",
//     }),
//     getCiclo: builder.query<CicloResponse, number>({
//       query: (ciclo_id) => `/control-escolar/ciclo?ciclo_id=${ciclo_id}/`,
//     }),
//   }),
// });

// export const { useGetCiclosQuery, useGetCicloQuery } = calendarioApiSlice;
