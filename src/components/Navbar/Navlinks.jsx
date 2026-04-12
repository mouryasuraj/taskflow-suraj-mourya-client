import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import getIcons from '../../utils/constants/getIcons'

const Navlinks = ({ name="", path }) => {
    return (
        <div>
            <NavLink className={({isActive}) => {
                return `${isActive ? "text-gray-900 border-gray-800" : "border-white"} flex flex-col text-gray-600 items-center px-4 pt-2 pb-1 border-b-[3px] hover:text-gray-900`
            }} to={path}>
                <FontAwesomeIcon fontSize={"20px"} icon={getIcons(name.toLowerCase())} />
                <span className='text-sm'>{name}</span>
            </NavLink>
        </div>
    )
}

export default Navlinks