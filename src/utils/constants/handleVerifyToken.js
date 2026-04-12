
import axiosInstance from "../../services/axios"

export const handleVerifyToken = async () => {
    try {
        const response = await axiosInstance.get("/auth/verifytoken")
        if(response.status===200 && response.data.status){
            return {
                valid:true,
                user:response.data?.data
            }
        }else{
            return {
                valid:false,
                user:null
            }
        }
    } catch (error) {
        console.log(error)
    }
}