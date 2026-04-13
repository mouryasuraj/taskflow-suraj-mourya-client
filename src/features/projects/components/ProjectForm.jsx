
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerLoader from "../../../components/SpinnerLoader";
import { darkBlue, lightBlue } from "../../../utils/constants";
import { useProject } from "../hooks/useProject";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectForm = ({setShowProjectForm, type,setOpen, showProjectForm,projectData}) => {
    const { register, handleSubmit, errors, isSubmitting, handleOnSubmit } = useProject(setShowProjectForm, showProjectForm, setOpen, type,projectData)

    return (
        <div className="fixed h-screen w-screen flex items-center justify-center z-3 bg-black/70 top-0 left-0">
            <div className="lg:w-[50vw] w-[90vw] rounded-2xl px-4 py-3 bg-white">
                <div className="flex items-center justify-between mb-3">
                    <p style={{color:darkBlue}} className="font-bold text-lg">{type==="create" ? "Create new project" : "Update project"}</p>
                    <button onClick={()=> setShowProjectForm(false)} className="p-2 hover:bg-red-400 text-gray-500 hover:text-white cursor-pointer rounded-sm w-fit">
                    <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4 ">

                    {/* Name */}
                    <div>
                        <input
                            {...register("name")}
                            placeholder="Project Name"
                            className="border p-2 w-full rounded"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <textarea
                            {...register("description")}
                            placeholder="Description"
                            className="border p-2 w-full rounded"
                            rows={10}
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end gap-2">
                        <button
                            style={{ backgroundColor: lightBlue }}
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer text-white px-4 py-2 rounded"
                        >
                            {isSubmitting ? <SpinnerLoader /> : "Submit"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ProjectForm;