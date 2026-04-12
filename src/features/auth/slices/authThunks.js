import { createAsyncThunk } from "@reduxjs/toolkit"
import loginService from "../services/loginService"
import signUpService from "../services/signupService"

export const login = createAsyncThunk("/auth/login", async (data, thunkAPI)=>{
    try {
        const response = await loginService.handleLogin(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.error} || "Login failed")
    }
})

export const signup = createAsyncThunk("/auth/signup", async (data, thunkAPI) =>{
    try {
        const response = await signUpService.handleSignUp(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.error} || "Signup failed")
    }
})

export const logout = createAsyncThunk("/auth/logout", async (data, thunkAPI) =>{
    try {
        const response = await loginService.handleLogout(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.error} || "Signup failed")
    }
})

