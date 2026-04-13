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
  const oldProj = state.projects.projects
  const filterData = oldProj.filter((d) => d._id !== action.payload.data._id)
  state.projects = {...state.projects, projects:[action.payload.data,...filterData]} || null;
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

// Get Project details with id - started


const handleGetProject = async (projectId) =>{
    const response = await axiosInstance.get(`/projects/${projectId}`)
    return response.data
}

const handleGetProFulfilled = (state, action) => {
  const data = action?.payload?.data
  const {tasks,...projectDetails} = data
  state.proDetails = projectDetails || null;
  state.tasks = tasks || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project details fetched successfully";
};


const handleGetProRejected = (state, action) => {
  state.proDetails = null;
  state.tasks = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};




// Get Project stats with id - started
const handleGetProStats = async (projectId) =>{
    const response = await axiosInstance.get(`/projects/${projectId}/stats`)
    return response.data
}

const handleGetProStatsFulfilled = (state, action) => {
  const data = action?.payload?.data
  state.projectStats = data || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project stats fetched successfully";
};


const handleGetProStatsRejected = (state, action) => {
  state.projectStats = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};



// Create Task - started

const handleCreateTask = async (data) =>{
    const response = await axiosInstance.post(`/projects/${data.projectId}/task`, data)
    return response.data
}

const handleCreateTaskFulfilled = (state, action) => {
  const oldTask = state.tasks
  state.tasks = [action.payload.data,...oldTask] || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project updated successfully";
  showMessage("success",state.message)
};


const handleCreateTaskRejected = (state, action) => {
  state.tasks = [];
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};



// Update Task - started

const handleUpdateTask = async ({payload,taskId}) =>{
  console.log(payload, taskId)
    const response = await axiosInstance.patch(`/projects/task/${taskId}`, payload)
    return response.data
}

const handleUpdateTaskFulfilled = (state, action) => {
  const oldTask = state.tasks
  const filterData = oldTask.filter((d) => d._id !== action.payload.data._id)
  state.tasks = [action.payload.data,...filterData] || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project updated successfully";
  showMessage("success",state.message)
};


const handleUpdateTaskRejected = (state, action) => {
  state.tasks = [];
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};



// Delete Task - started

const handleDeleteTask = async ({projectId,taskId}) =>{
    const response = await axiosInstance.delete(`/projects/task/${taskId}?project_id=${projectId}`)
    return response.data
}

const handleDeleteTaskFulfilled = (state, action) => {
  const oldTask = state.tasks
  const filterData = oldTask.filter((d) => d._id !== action.payload.data._id)
  state.tasks = filterData || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "project deleted successfully";
  showMessage("success",state.message)
};


const handleDeleteTaskRejected = (state, action) => {
  state.tasks = [];
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.payload?.message || "Something went wrong. Please try again later.";
  showMessage("error", state.message);
};


const getStatus = (status) => {
    if (status === "in_progress") {
        return { status: "In Progress", color: "lightblue" }
    } else if (status === "done") {
        return { status: "Done", color: "lightgreen" }
    } else {
        return { status: "Todo", color: "#ffa96f" }
    }
}
const getSeverity = (s) => {
    if (s === "medium") {
        return { s: "Medium", color: "#B66200" }
    } else if (s === "high") {
        return { s: "High", color: "#C11506" }
    } else {
        return { s: "Low", color: "##F8DB25" }
    }
}




const projectService = {handleGetProjects, handleFulfilled, handleRejected,handleCreateProject, handleCreateProFulfilled, handleCreateProRejected, handleDeleteProFulfilled, handleDeleteProRejected, handleDeleteProject, handleUpdateProFulfilled, handleUpdateProRejected, handleUpdateProject, handleGetProFulfilled, handleGetProRejected, handleGetProject, handleGetProStatsFulfilled, handleGetProStatsRejected, handleGetProStats,getStatus,getSeverity, handleUpdateTask, handleUpdateTaskFulfilled, handleUpdateTaskRejected, handleCreateTask, handleCreateTaskFulfilled, handleCreateTaskRejected, handleDeleteTask, handleDeleteTaskFulfilled, handleDeleteTaskRejected}

export default projectService