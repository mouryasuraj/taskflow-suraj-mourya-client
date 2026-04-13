import { createSlice } from "@reduxjs/toolkit";
import { createProject, deleteProject, getProjectDetails, getProjectStats, projects, updateProject } from "./projectThunks";
import handlePending from "../../../utils/constants/handlePending";
import projectService from "../services/projectServices";
import { createTask, updateTask } from "./taskThunks";

const initialState = {
    projects:[],
    tasks:[],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    proDetails:null,
    taskDetails:null,
    projectStats:null,
    taskAction:"",
    taskId:"",
    projectId:"",
    taskData:null
}

const projectSlice = createSlice({
    name:"projects",
    initialState,
    reducers:{
        setTaskId:(state,action) =>{
            state.taskId = action.payload
        },
        setTaskAction:(state,action) =>{
            state.taskAction = action.payload
        },
        setTaskData:(state,action) =>{
            state.taskData = action.payload
        },
        setProjectId:(state,action) =>{
            state.projectId = action.payload
        },
        
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
        .addCase(getProjectDetails.fulfilled, projectService.handleGetProFulfilled)
        .addCase(getProjectDetails.rejected, projectService.handleGetProRejected)
        .addCase(getProjectStats.fulfilled, projectService.handleGetProStatsFulfilled)
        .addCase(getProjectStats.rejected, projectService.handleGetProStatsRejected)
        // task
        .addCase(createTask.fulfilled, projectService.handleCreateTaskFulfilled)
        .addCase(createTask.rejected, projectService.handleCreateTaskRejected)
        .addCase(updateTask.fulfilled, projectService.handleUpdateTaskFulfilled)
        .addCase(updateTask.rejected, projectService.handleUpdateTaskRejected)
        .addMatcher((a)=> a.type.endsWith("/pending"), handlePending)
    }
})

export const {setTaskAction, setTaskId,setTaskData,setProjectId} = projectSlice.actions

export default projectSlice.reducer;