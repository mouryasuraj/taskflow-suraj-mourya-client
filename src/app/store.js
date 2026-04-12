import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/slices/authSlice.js'
import projectReducer from '../features/projects/slices/projectSlice.js'

const store = configureStore({
    reducer:{
        auth:authReducer,
        projects:projectReducer
    }
})

export default store