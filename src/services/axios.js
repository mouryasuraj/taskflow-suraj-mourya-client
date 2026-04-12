import axios from 'axios'
import { env } from '../utils/constants';

const axiosInstance = axios.create({
    baseURL:env.BASE_URL,
    withCredentials:true
})



export default axiosInstance;