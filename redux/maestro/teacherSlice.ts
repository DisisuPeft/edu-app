import { createSlice } from "@reduxjs/toolkit";
import { Modulos } from "../interface/sistema/modulos";
import { TabsModulos } from "../interface/sistema/tabs";
import { Role } from "../interface/authentication/Users";

interface teacherState {
  maestros: null;
  maestro: null;
  // pipelines: null,
  isLoading: boolean;
}

const initialState = {
  maestros: null,
  maestro: null,
  // pipelines: null,
  isLoading: true,
} as teacherState;

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    clearTeachers: (state) => {
      state.maestros = null;
    },
    clearTeacher: (state) => {
      state.maestro = null;
    },
    // clearPipeline: (state) => {
    //   state.pipelines = null
    // },
    finishInitialLoadTeacher: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearTeachers, clearTeacher, finishInitialLoadTeacher } =
  teacherSlice.actions;
export default teacherSlice.reducer;
