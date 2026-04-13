import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteTask, getProjectDetails, getProjectStats } from "../slices/projectThunks"

const useProjectDetails = () =>{
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const {taskId} = useSelector(store => store.projects)

    const {projectId} = useParams()

    const handleDelete = async () =>{
       const res = await dispatch(deleteTask({projectId, taskId})).unwrap()
       if(res.status){
        setOpen(false)
       }

    }

    useEffect(()=>{
        dispatch(getProjectDetails(projectId))
        dispatch(getProjectStats(projectId))
    },[])

    return {dispatch,open, setOpen, handleDelete}
}

export default useProjectDetails