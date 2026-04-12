
import { useSelector } from 'react-redux'
import SpinnerLoader from './SpinnerLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({btnTxt, icon, fn,isLoading}) => {
    
    return (
        <button
            onClick={fn}
            disabled={isLoading}
            tabIndex={7} className={`${isLoading ? "bg-[#c0c0c0] cursor-not-allowed" : "bg-[#00BCBB] cursor-pointer hover:bg-[#0b8d8d]"} text-white w-full px-3 py-2 rounded-sm  text-md  font-bold flex items-center justify-center gap-2`}>
            {isLoading && <SpinnerLoader />}
            <span>{btnTxt}</span>
            <FontAwesomeIcon className="" icon={icon} />
        </button>
    )
}

export default Button