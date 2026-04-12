import { createSlice } from "@reduxjs/toolkit";
import { createProject, deleteProject, projects, updateProject } from "./projectThunks";
import handlePending from "../../../utils/constants/handlePending";
import projectService from "../services/projectServices";

const initialState = {
    projects:null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

const projectSlice = createSlice({
    name:"projects",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(projects.fulfilled, projectService.handleFulfilled)
        .addCase(projects.rejected, projectService.handleRejected)
        .addCase(createProject.fulfilled, projectService.handleCreateProFulfilled)
        .addCase(createProject.rejected, projectService.handleCreateProRejected)
        .addCase(updateProject.fulfilled, projectService.handleUpdateProFulfilled)
        .addCase(updateProject.rejected, projectService.handleUpdateProRejected)
        .addCase(deleteProject.fulfilled, projectService.handleDeleteProFulfilled)
        .addCase(deleteProject.rejected, projectService.handleDeleteProRejected)
        .addMatcher((a)=> a.type.endsWith("/pending"), handlePending)
    }
})

export const {} = projectSlice.actions

export default projectSlice.reducer;