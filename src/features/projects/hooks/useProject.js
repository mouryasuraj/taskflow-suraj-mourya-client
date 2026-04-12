import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, deleteProject, projects, updateProject } from "../slices/projectThunks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProjectSchema } from "../schema/projectSchema";

export const useProject = (setShowProjectForm,showProjectForm,setOpen,type,projectId) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createProjectSchema),
  });

  const handleDelete = async (id) =>{
    const res = await dispatch(deleteProject(id)).unwrap()
    if(res.status){
        setOpen(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = showProjectForm ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // cleanup (important)
    };
  }, [showProjectForm]);

  const handleOnSubmit = async (payload) => {
    payload.owner_id = user?.userId;
    let data;
    if(type==="create"){
        data = await dispatch(createProject(payload)).unwrap();
    }else if(type ==="update"){
        data = await dispatch(updateProject({payload, projectId})).unwrap();
    }
    if (data.status) {
      setShowProjectForm(false);
    }
  };

  useEffect(() => {
    dispatch(projects({ page: 1, limit: 20 }));
  }, []);

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleOnSubmit,
    setShowProjectForm,
    handleDelete
  };
};
