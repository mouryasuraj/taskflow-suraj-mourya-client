import projectService from "../services/projectServices"


const ProjectStats = ({ count, status }) => {
    return (
        <div>
            <div className='w-20'>
                <div style={{backgroundColor:projectService.getStatus(status).color}} className={`w-20 h-20 rounded-sm flex items-center justify-center text-2xl font-bold`}>
                    <p>{count}</p>
                </div>
                <p className='text-center'>{projectService.getStatus(status).status}</p>
            </div>
        </div>
    )
}

export default ProjectStats