import { createSlice } from "@reduxjs/toolkit";
import { Modulos} from "../interface/sistema/modulos";
import { TabsModulos } from "../interface/sistema/tabs";
import { Role } from "../interface/authentication/Users";

interface crmState {
  leads: null
  isLoading: boolean;
}

const initialState = {
  leads: null,
  isLoading: true,
} as crmState;

const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    clearLead: (state) => {
      state.leads = null
    },
    finishInitialLoadCatalogos: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearLead, finishInitialLoadCatalogos } = crmSlice.actions;
export default crmSlice.reducer;
