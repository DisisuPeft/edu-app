import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { X } from "lucide-react";
import { Transition } from "@/app/utils/Transition/Transition";
import React, { useEffect } from "react";

export default function UsersDialog({
  open,
  setOpen,
  setClose,
  from,
  resetFrom,
}: {
  open: boolean;
  setOpen?: () => void;
  setClose: (event: boolean) => void;
  from?: string;
  resetFrom: (message: string) => void;
}) {
  useEffect(() => {
    // console.log(from);
  }, [from]);
  const handleClose = () => {
    setClose(false);
    resetFrom("");
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar sx={{ backgroundColor: "#a20519" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <X />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Usuarios
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Guardar
            </Button> */}
          </Toolbar>
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
}
