import Swal from "sweetalert2";
import "../../styles/aboutmessage.css";

const AboutMessage = ({ message ,icon}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    iconColor: "#fb923c",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon:  icon.trim(),
    title: message,
    customClass: {
      popup: "colored-toast",
      title: "font-Urbanist text-orange-400",
    },
  });
};

export default AboutMessage;
