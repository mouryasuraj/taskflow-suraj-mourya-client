import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getProjectDetails, getProjectStats } from "../slices/projectThunks"

const useProjectDetails = () =>{
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const {projectId} = useParams()

    useEffect(()=>{
        dispatch(getProjectDetails(projectId))
        dispatch(getProjectStats(projectId))
    },[])

    return {dispatch,open, setOpen}
}

export default useProjectDetails