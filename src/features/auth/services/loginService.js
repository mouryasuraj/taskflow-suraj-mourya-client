
import axiosInstance from "../../../services/axios";
import { showMessage } from "../../../utils/constants/showMessage";
import validator from 'validator'


const handleLogin = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

const handleLogout = async () =>{
  const response = await axiosInstance.get("/auth/logout")
  return response.data
}

const handleFulfilled = (state, action) => {
  state.user = action.payload?.data || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.isAuthenticated=true,
  state.isAuthChecked=true,
  state.message = action.payload?.message || "Successfully loggedIn.";
  showMessage("success", state.message);
};

const handleRejected = (state, action) => {
  state.user = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message =
    action.payload?.message || "Something went wrong. Please try again later.";
};

const handleLogoutFulfilled = (state, action) => {
  state.user = null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.isAuthenticated=false,
  state.isAuthChecked=false,
  state.message = action.payload?.message || "Successfully logged out.";
  showMessage("success", state.message);
};

const handleLogoutRejected = (state, action) => {
  state.user = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message =
    action.payload?.message || "Something went wrong. Please try again later.";

};

const validateLoginField = (userDetails) =>{
  const {email, password} = userDetails;
  if(!email || !password) {
    throw new Error("please provide input")
  }

  if(!validator.isEmail(email)){
    throw new Error("Please provide valid email")
  }
}



const loginService = { handleLogin, handleFulfilled, handleRejected, validateLoginField,handleLogout, handleLogoutFulfilled, handleLogoutRejected };
export default loginService
