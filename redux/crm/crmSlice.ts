import { createSlice } from "@reduxjs/toolkit";
import { Modulos} from "../interface/sistema/modulos";
import { TabsModulos } from "../interface/sistema/tabs";
import { Role } from "../interface/authentication/Users";

interface crmState {
  leads: null
  lead: null,
  pipelines: null,
  isLoading: boolean;
}

const initialState = {
  leads: null,
  lead: null,
  pipelines: null,
  isLoading: true,
} as crmState;

const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    clearLeads: (state) => {
      state.leads = null
    },
    clearLead: (state) => {
      state.lead = null
    },
    clearPipeline: (state) => {
      state.pipelines = null
    },
    finishInitialLoadCatalogos: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearLeads, finishInitialLoadCatalogos, clearLead, clearPipeline } = crmSlice.actions;
export default crmSlice.reducer;
