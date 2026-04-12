
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Button from "../../components/Button"
import PageTitle from "../../components/PageTitle"
import ProjectCard from "./components/ProjectCard"
import { useProject } from "./hooks/useProject"
import { useSelector } from "react-redux"
import SpinnerLoader from "../../components/SpinnerLoader"
import ProjectForm from "./components/ProjectForm"
import { useEffect, useState } from "react"
import DecisionBox from "../../components/DecisionBox"

const Projects = () => {
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [open, setOpen] = useState(false)
    const [projectId, setProjectId] = useState("")
    const [actionType, setActionType] = useState("")
    const { handleDelete } = useProject(setShowProjectForm, showProjectForm, setOpen, actionType,projectId)
    const { isLoading, projects } = useSelector(store => store.projects)
    

    if (!projects) return <SpinnerLoader />
    const allProjects = projects.projects


    return (
        <div className="bg-white py-3 px-5 rounded-lg">
            <div className="flex items-center justify-between gap-20">
                <PageTitle name={"Projects"} />
                <div>
                    <Button fn={() => {
                            setActionType("create")
                            setShowProjectForm(true)
                    }} btnTxt={"Create Project"} isLoading={isLoading} icon={faPlus} />
                </div>
            </div>
            <div className="mt-5">
                <div className="flex gap-5 flex-wrap">
                    {
                        allProjects.map((data) => (
                            <ProjectCard setActionType={setActionType} key={data._id} data={data} setProjectId={setProjectId} setOpen={setOpen} setShowProjectForm={setShowProjectForm} />
                        ))
                    }
                </div>
            </div>
            {showProjectForm && <ProjectForm projectId={projectId} setOpen={setOpen} showProjectForm={showProjectForm} setShowProjectForm={setShowProjectForm} type={actionType} />}
            {open && <DecisionBox type={"Confirmation"} title="Are you sure you want to delete this project?" setOpen={setOpen} onYesClick={() => handleDelete(projectId)} />}

        </div>
    )
}

export default Projects