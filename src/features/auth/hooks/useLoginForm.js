import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../slices/authThunks.js";
import loginService from "../services/loginService.js";
import { setIsError, setMessage } from "../slices/authSlice.js";
import { defaulErrMsg } from "../../../utils/constants/ui.constants.js";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setMessage(""))

  }, [])

    
  const handleLogout = async () =>{
    const res = await dispatch(logout()).unwrap()
    if(res?.status){
      navigate("/auth/login")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      const userDetails = {email,password:pass}
      loginService.validateLoginField(userDetails)

      await dispatch(login(userDetails)).unwrap();
      navigate("/")
    } catch (error) {
      dispatch(setMessage(error?.message || defaulErrMsg))
      dispatch(setIsError(true))
    }
  };

  return { setEmail, email, setPass, pass, handleSubmit,handleLogout };
};
