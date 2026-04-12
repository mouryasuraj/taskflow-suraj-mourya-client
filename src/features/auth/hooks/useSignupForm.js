import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../slices/authThunks";
import { toast } from "react-toastify";
import { setIsError, setMessage } from "../slices/authSlice";
import signUpService from "../services/signupService";
import { useNavigate } from "react-router-dom";

export const useSignupForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(setMessage(""))
  }, [])


  const handleSignup = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      const data = signUpService.validateSignupField({firstName, lastName, email, pass, confirmPass})
      const payload = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.pass,
      };
      const res = await dispatch(signup(payload)).unwrap();
      if(res?.status){
        navigate("/auth/login")
      }
      
    } catch (error) {
      console.log(error);
      dispatch(setMessage(error.message || "Something went wrong"))
      dispatch(setIsError(true))
    }
  };

  return {
    firstName, 
    lastName, 
    email,
    pass,
    confirmPass,
    setFirstName,
    setLastName,
    setEmail,
    setPass,
    setConfirmPass,
    handleSignup,
  };
};
