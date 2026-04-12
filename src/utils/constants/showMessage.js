import { toast } from "react-toastify";

export const showMessage = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg, { toastId: msg.split(" ").join("-") });
      break;
    case "error":
      toast.error(msg, { toastId: msg.split(" ").join("-") });
      break;
    case "info":
      toast.info(msg, { toastId: msg.split(" ").join("-") });
      break;
    case "warning":
      toast.warning(msg, { toastId: msg.split(" ").join("-") });
      break;
    default:
      toast.error("Something went wrong", { toastId: "something-went-wrong" });
      break;
  }
};
