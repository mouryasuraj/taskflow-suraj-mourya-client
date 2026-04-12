import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useUserLayout = async () =>{

    const {user, isAuthenticated} = useSelector(store => store.auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated && user && window.location.pathname==="/"){
            navigate("/projects")
        }
    },[])
}

export default useUserLayout