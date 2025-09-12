"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Alert } from "@mui/material";
import { Check, X } from "lucide-react";
import { useEffect } from "react";
import { clearAlert } from "@/redux/features/alert/alertSlice";

export default function AlertUser() {
  const alert = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  // console.log(alert);
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => dispatch(clearAlert()), 4000);
      return () => clearTimeout(timeout);
    }
  }, [alert, dispatch]);

  if (!alert) return null;

  return (
    <div className="fixed top-[80px] right-6 z-[100px]">
      <Alert
        icon={
          alert.type === "success" ? (
            <div className="rounded-full">
              <Check fontSize="inherit" />
            </div>
          ) : (
            <X fontSize="inherit" />
          )
        }
        variant="filled"
        severity={alert.type}
        className="shadow-lg"
      >
        {alert.message}
      </Alert>
    </div>
  );
}
