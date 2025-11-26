// PermissionsAccessForm.tsx
import * as React from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { Module } from "@/redux/interface/sistema/modulos";
import useUserAccess from "@/hooks/plataforma/admin/use-user-access";

type Props = {
  userId: number;
  modules: Module[];
};

export default function PermissionsAccessForm({ userId, modules }: Props) {
  const {
    control,
    isSubmitting,
    handleSubmit,
    isDirty,
    tabsmodules,
    onSubmit,
  } = useUserAccess({
    userId,
  });
  // console.log(userId);
  return (
    <Card className="max-w-2xl z-50">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Permisos y accesos
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* MÓDULOS */}
          <Controller
            name="module" // <- ahora es number | null, no number[]
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth size="small" error={!!error}>
                <InputLabel id="modulo-label">Módulo</InputLabel>
                <Select
                  labelId="modulo-label"
                  label="Módulo"
                  // Select simple: sin `multiple`
                  value={field.value ?? ""} // "" para representar "sin selección"
                  onChange={(e) => {
                    const val = e.target.value;
                    // convierte a number o null si está vacío
                    field.onChange(val === "" ? null : Number(val));
                  }}
                  MenuProps={{
                    container: document.body,
                    PaperProps: { style: { zIndex: 1400 } }, // > z del modal
                  }}
                >
                  <MenuItem value="">
                    <em>Selecciona un módulo</em>
                  </MenuItem>

                  {modules?.map((m) => (
                    <MenuItem key={m.id} value={Number(m.id)}>
                      {m.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />

          {/* SUBMÓDULOS / TABS */}
          <Controller
            name="tabmodule"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth size="small">
                <InputLabel id="submodulos-label">Submódulos</InputLabel>
                <Select
                  labelId="submodulos-label"
                  multiple
                  input={<OutlinedInput label="Submódulos" />}
                  value={field.value ?? []}
                  onChange={(e) => {
                    const raw = e.target.value;
                    const arr = Array.isArray(raw) ? raw : [raw];
                    field.onChange(arr.map((v) => Number(v)));
                  }}
                  renderValue={(selected) => {
                    const ids = selected as number[];
                    return tabsmodules
                      .filter((t) => ids.includes(Number(t.id)))
                      .map((t) => t.name)
                      .join(", ");
                  }}
                  MenuProps={{
                    container: document.body,
                    PaperProps: { style: { zIndex: 1400 } }, // > z del modal
                  }}
                >
                  {tabsmodules?.map((t) => {
                    const idNum = Number(t.id);
                    const selected = (field.value ?? []).includes(idNum);
                    return (
                      <MenuItem key={t.id} value={idNum}>
                        <Checkbox checked={selected} />
                        <ListItemText primary={t.name} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          />

          <div className="flex items-center gap-3">
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Guardar permisos
            </Button>
            {!isDirty && (
              <span className="text-sm text-gray-500">Sin cambios</span>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
