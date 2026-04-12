import axiosInstance from "../../../services/axios.js"
import { showMessage } from "../../../utils/constants/showMessage.js"


// Get Project - started
const handleGetProjects = async (data) =>{
    const {page=1, limit=20} = data 
    const response = await axiosInstance.get(`/projects?page=${page}&limit${limit}`)
    return response.data
}

const handleFulfilled = (state, action) => {
  state.projects = action.payload?.data || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "projects fetched successfully";
};

const handleRejected = (state, action) => {
  state.projects = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};

// Get Project - ended


// Create Project - started

const handleCreateProject = async (data) =>{
    const response = await axiosInstance.post(`/projects`, data)
    return response.data
}

const handleCreateProFulfilled = (state, action) => {
  state.projects = {...state.projects,projects:[action.payload?.data, ...state.projects.projects]} || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project created successfully";
  showMessage("success",state.message)
};


const handleCreateProRejected = (state, action) => {
  state.projects = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};

// Create Project - ended


// Delete Project - started

const handleDeleteProject = async (id) =>{
    const response = await axiosInstance.delete(`/projects/${id}`, id)
    return response.data
}

const handleDeleteProFulfilled = (state, action) => {
    const filterData = state.projects.projects.filter(d => d._id !==action.payload?.data._id)
  state.projects = {...state.projects, projects:filterData} || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project Deleted successfully";
  showMessage("success",state.message)
};


const handleDeleteProRejected = (state, action) => {
  state.projects = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};

// Update Project - started

const handleUpdateProject = async (data) =>{
    const {payload, projectId} = data
    const response = await axiosInstance.patch(`/projects/${projectId}`, payload)
    return response.data
}

const handleUpdateProFulfilled = (state, action) => {
  state.projects = {} || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project updated successfully";
  showMessage("success",state.message)
};


const handleUpdateProRejected = (state, action) => {
  state.projects = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};

// Update Project - ended


const projectService = {handleGetProjects, handleFulfilled, handleRejected,handleCreateProject, handleCreateProFulfilled, handleCreateProRejected, handleDeleteProFulfilled, handleDeleteProRejected, handleDeleteProject, handleUpdateProFulfilled, handleUpdateProRejected, handleUpdateProject}

export default projectService