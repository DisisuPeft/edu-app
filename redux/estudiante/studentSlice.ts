import { createSlice } from "@reduxjs/toolkit";
import { Modulos} from "../interface/sistema/modulos";
import { TabsModulos } from "../interface/sistema/tabs";
import { Role } from "../interface/authentication/Users";

interface studentState {
  estudiantes: null
  estudiante: null,
  // pipelines: null,
  isLoading: boolean;
}

const initialState = {
  estudiantes: null,
  estudiante: null,
  // pipelines: null,
  isLoading: true,
} as studentState;

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    clearStudents: (state) => {
      state.estudiantes = null
    },
    clearStudent: (state) => {
      state.estudiante = null
    },
    // clearPipeline: (state) => {
    //   state.pipelines = null
    // },
    finishInitialLoadStudents: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearStudent, clearStudents, finishInitialLoadStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
