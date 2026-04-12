import { NavLink } from "react-router-dom"
import { lightBlue, LOGO, darkBlue } from "../../utils/constants"



const ShortLogo = ({ fontSize = "20px" }) => {
    return (
        <NavLink to="/projects">
            <h1 style={{ fontSize: fontSize, backgroundColor: darkBlue }} className={`font-bold tracking-widest select-none w-fit text-center px-1 rounded-sm`}><span style={{ color: 'white' }} >{LOGO.partOne}</span><span style={{ color: lightBlue }}>{LOGO.partTwo}</span></h1>
        </NavLink>
    )
}

export default ShortLogo