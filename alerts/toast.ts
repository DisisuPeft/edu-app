import Swal from "sweetalert2";

type Icon = 'success' | 'error' | 'warning' | 'info' | 'question';

export const Toast = ({message, icon}: {message:string, icon:Icon}) => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 4000,
      didOpen: (toast) => {
           toast.onmouseenter = Swal.stopTimer;
           toast.onmouseleave = Swal.resumeTimer;
      }
    });
  
    toast.fire({
      icon: icon,
      title: message,
    });
  };



export const Alert = ({title, text, icon}: {title: string, text: string, icon: Icon}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}