import { createSlice } from "@reduxjs/toolkit";
import loginService from '../services/loginService.js'
import signUpService from "../services/signupService.js";
import { login, signup, logout, getUsers } from "./authThunks.js";
import handlePending from "../../../utils/constants/handlePending.js";


// Initial State 
const initialState = {
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    isAuthenticated:false,
    isAuthChecked:false,
    allUsers:[]
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setIsError: (state, action) => {
            state.isError = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, loginService.handleFulfilled)
            .addCase(login.rejected, loginService.handleRejected)
            .addCase(logout.fulfilled, loginService.handleLogoutFulfilled)
            .addCase(logout.rejected, loginService.handleLogoutRejected)
            .addCase(signup.fulfilled, signUpService.handleFulfilled)
            .addCase(signup.rejected, signUpService.handleRejected)
            .addCase(getUsers.fulfilled, loginService.handleGetUsersFulfilled)
            .addCase(getUsers.rejected, loginService.handleGetUsersRejected)
            .addMatcher((a) => a.type.endsWith("/pending"), handlePending)
    }
})

export const { setIsError, setMessage, setIsAuthenticated,setUser, setIsAuthChecked } = authSlice.actions

export default authSlice.reducer

