import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { formatInTimeZone } from 'date-fns-tz'
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { formatDate } from "../../../utils/constants/formatDate"
import { useDispatch } from "react-redux"
import { setProjectId } from "../slices/projectSlice"


const ProjectCard = ({ data, setOpen ,setActionType,setShowProjectForm,setProjectData}) => {
    const { name, description, _id } = data
    const [showAction, setShowActions] = useState(false)
    const createdAt = formatDate(data.createdAt)
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()

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
        <NavLink  to={`/project/${_id}`} className='bg-gray-100 max-h-75 min-h-50 w-full md:min-w-100 hover:cursor-pointer border-4 relative border-gray-100 hover:border-gray-400 md:flex-2 rounded-2xl px-4 py-2 '>
            {showAction && <div onClick={(e)=>{
                e.preventDefault()
                e.stopPropagation()
            }} className="absolute top-0 right-0 w-full h-full z-1"></div>}
            <div data-tip={!showAction ? name :""} className="tooltip tooltip-top w-full h-full">
            <div className="flex  items-center justify-between">
                <h2 className="font-bold text-lg">{name}</h2>
                <div ref={dropdownRef} onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }} className="relative">

                    <div onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowActions(prev => !prev)
                    }} className="hover:bg-gray-200 rounded-full px-1.75 py-1">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>

                    {showAction && <ul className="bg-white z-2 border-2 border-gray-200 right-0 w-17.5 absolute rounded-sm flex flex-col items-center space-y-1">
                        <li onClick={()=>{
                            setActionType("update")
                            dispatch(setProjectId(_id))
                            setProjectData({name, description})
                            setShowProjectForm(true)
                        }} className="hover:bg-blue-100 py-1 w-full text-center">Update</li>
                        <li onClick={() => {
                            dispatch(setProjectId(_id))
                            setOpen(true)
                        }
                        } className="hover:bg-blue-100 py-1 w-full text-center">Delete</li>
                    </ul>}

                </div>
            </div>
            <p className="text-[12px] text-gray-500">{createdAt}</p>
            <p className="text-[14px] mt-2 line-clamp-10">{description}</p>
            </div>
        </NavLink>
    )
}

export default ProjectCard