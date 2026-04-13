import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { formatDate } from '../../../utils/constants/formatDate'
import projectService from '../services/projectServices'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTaskAction, setTaskData, setTaskId } from '../slices/projectSlice'

const TaskCard = ({ data, setOpen, setShowTaskForm }) => {
    const { _id, title, description, status, priority, assignee_id } = data
    const [showAction, setShowActions] = useState(false)
    const createdAt = formatDate(data.createdAt)
    const due_date = formatDate(data.due_date)
    const dispatch = useDispatch()

    console.log("assignee_id",assignee_id)


    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowActions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className='bg-gray-100 md:max-w-[50%] max-h-75 min-h-50 w-full md:min-w-100 border-4 relative border-gray-100 hover:border-gray-400 lg:flex-2 rounded-2xl px-4 py-2 '>
            <div data-tip={!showAction ? title : ""} className="tooltip tooltip-top w-full h-full">
                <div className="flex items-center justify-between">
                    <p className=" hover:underline font-bold text-lg text-gray-500">{title}</p>
                    <div ref={dropdownRef} onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }} className="relative">
                        <div onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setShowActions(prev => !prev)
                        }} className="hover:bg-gray-200 cursor-pointer rounded-full px-1.75 py-1">
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </div>

                        {showAction && <ul className="bg-white z-2 border-2 border-gray-200 right-0 w-17.5 absolute rounded-sm flex flex-col items-center cursor-pointer space-y-1">
                            <li onClick={() => {
                                dispatch(setTaskAction("update"))
                                dispatch(setTaskId(_id))
                                dispatch(setTaskData({...data, assignee_id:assignee_id.name}))
                                setShowTaskForm(true)
                            }} className="hover:bg-blue-100 py-1 w-full text-center">Update</li>
                            <li onClick={() => {
                                dispatch(setTaskId(_id))
                                setOpen(true)
                            }
                            } className="hover:bg-blue-100 py-1 w-full text-center">Delete</li>
                        </ul>}

                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p className="text-[12px] text-gray-500">Created: {createdAt}</p>
                    <p className="text-[12px] text-gray-500">Updated: {createdAt}</p>
                </div>
                <p className="text-[12px] text-gray-500">Due Date: {due_date}</p>
                <div className='flex items-center gap-2 my-3'>
                    <p style={{ color: projectService.getSeverity(priority).color }}>{projectService.getSeverity(priority).s}</p>
                    <div>-</div>
                    <p className='w-fit px-2 py-px rounded-xs' style={{ backgroundColor: projectService.getStatus(status).color }}>{projectService.getStatus(status).status}</p>
                    <div>-</div>
                    <p className='text-gray-600 cursor-pointer'>{assignee_id ? assignee_id.name : "No assigned"}</p>
                </div>
                <p className="text-[14px] mt-2 line-clamp-10">{description}</p>
            </div>
        </div>
    )
}

export default TaskCard