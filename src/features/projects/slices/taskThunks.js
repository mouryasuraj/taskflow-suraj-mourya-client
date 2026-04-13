import { createAsyncThunk } from "@reduxjs/toolkit"
import projectService from "../services/projectServices"

export const createTask = createAsyncThunk("/createTask", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleCreateTask(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})

export const updateTask = createAsyncThunk("/updateTask", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleUpdateTask(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})