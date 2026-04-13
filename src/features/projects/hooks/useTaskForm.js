import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTaskSchema } from "../schema/projectSchema";
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../slices/taskThunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../../auth/slices/authThunks";
import { formatDate } from "../../../utils/constants/formatDate";
import { formatInTimeZone } from "date-fns-tz";

const useTaskForm = (setShowTaskForm) => {
  const dispatch = useDispatch();
  const {projectId} = useParams()
  const {taskAction, taskData, taskId} = useSelector(store => store.projects)
  const {allUsers} = useSelector(store => store.auth)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(createTaskSchema),
  });

  useEffect(()=>{
    if(taskAction==="create"){
      reset({title:"", description:"",status:"", priority:"",assignee_id:"", due_date:""})
    }else{
      reset(taskData)
    }
  },[taskData])

  useEffect(()=>{
    dispatch(getUsers())
  },[])

  const handleOnSubmit = async (payload) => {
    payload.project_id = projectId
    let data;
    if (taskAction === "create") {
      data = await dispatch(createTask(payload)).unwrap();
    } else if (taskAction === "update") {
      data = await dispatch(updateTask({payload,taskId})).unwrap();
    }
    if (data.status) {
      setShowTaskForm(false);
    }
  };

  return { register, handleSubmit, errors, isSubmitting, handleOnSubmit,taskAction,allUsers };
};

export default useTaskForm;
