
import { useSelector } from 'react-redux'
import PageTitle from '../../../components/PageTitle'
import useProjectDetails from '../hooks/useProjectDetail'
import SpinnerLoader from '../../../components/SpinnerLoader'
import { formatDate } from '../../../utils/constants/formatDate'
import ProjectStats from './ProjectStats'
import TaskCard from './TaskCard'
import Button from '../../../components/Button'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskForm from './TaskForm'
import { useState } from 'react'
import { setTaskAction } from '../slices/projectSlice'
import DecisionBox from '../../../components/DecisionBox'

const ProjectDetails = () => {
    const { dispatch, open, setOpen} = useProjectDetails()
    const [showTaskForm, setShowTaskForm] = useState(false)
    const { tasks, proDetails, projectStats, isLoading } = useSelector(store => store.projects)

    if (!proDetails || !projectStats) return <SpinnerLoader />
    const { name, description, createdAt, updatedAt } = proDetails

    const statusCount = projectStats[0]["statusCount"]


    return (
        <div className="bg-white py-3 px-5 rounded-lg">
            <div className="space-y-2">
                <PageTitle name={"Project Details"} />
            </div>

            {/* Project details */}
            <div className='mt-4 space-y-4'>
                <div className='flex items-center gap-2'>
                    <div className='bg-blue-100 w-8 h-8 flex items-center justify-center rounded-xs font-semibold text-xl'>{name[0]}</div>
                    <h3 className='font-semibold text-gray-500'>{name}</h3>
                </div>

                <div className='flex lg:flex-row flex-col items-stretch gap-4 flex-wrap min-h-75'>
                    <div className='border-2 rounded-sm border-gray-200 px-5 py-3 lg:flex-3 whitespace-break-spaces text-gray-600 '>{description ? description : "No description found."}</div>
                    <div className='border-2 rounded-sm space-y-2 text-gray-600 border-gray-200 px-5 py-3 lg:flex-1'>
                        <p className='text-[15px]'><span className='text-gray-800'>Created at: </span>{formatDate(createdAt)}</p>
                        <p className='text-[15px]'><span className='text-gray-800'>Last update: </span>{formatDate(updatedAt)}</p>
                        <div>
                            <p className='text-xl font-bold mt-5 text-gray-600'>Task Status</p>
                            <div className='mt-2 flex items-center justify-between'>
                                {
                                    statusCount.length === 0 ? "No tasks" : statusCount.map((data) => {
                                        return <ProjectStats key={data.count} count={data.count} status={data._id} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Task */}
                <div>
                    <div className="flex items-center justify-between gap-20">

                        <h3 className='text-xl font-semibold text-gray-600'>Tasks</h3>
                        <div>
                            <Button fn={() => {
                                dispatch(setTaskAction("create"))
                                setShowTaskForm(true)
                            }} btnTxt={"Create Task"} isLoading={isLoading} icon={faPlus} />
                        </div>
                    </div>
                    <div className='mt-4 '>
                        <div className='flex flex-wrap gap-5 '>

                            {
                                tasks.map(data => {
                                    return <TaskCard key={data._id} data={data} setOpen={setOpen} setShowTaskForm={setShowTaskForm} />
                                })
                            }

                        </div>
                    </div>
                    {open && <DecisionBox setOpen={setOpen} type={"Confirmation"} onYesClick={handleDelete} title='Are you sure you want to delete this task?' />}
                    {showTaskForm && <TaskForm setShowTaskForm={setShowTaskForm} />}
                </div>

            </div>

        </div>
    )
}

export default ProjectDetails