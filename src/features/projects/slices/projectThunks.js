import { createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "../services/projectServices";

export const projects = createAsyncThunk("/projects", async (data, thunkAPI)=>{
    try {
        const response = await projectService.handleGetProjects(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.error || "something went wrong"})
    }
})


export const createProject = createAsyncThunk("/createProjects", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleCreateProject(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})

export const updateProject = createAsyncThunk("/updateProjects", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleUpdateProject(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})

export const deleteProject = createAsyncThunk("/deleteProjects", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleDeleteProject(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})

export const getProjectDetails = createAsyncThunk("/getProjectDetails", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleGetProject(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})

export const getProjectStats = createAsyncThunk("/getprojectstats", async(data, thunkAPI)=>{
    try {
        const response = await projectService.handleGetProStats(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.reponse?.data.error || "something went wrong"})
    }
})