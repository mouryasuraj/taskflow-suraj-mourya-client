import { lightBlue, LOGO, darkBlue } from "../../utils/constants"



const Logo = ({fontSize="20px"}) => {
  return (
    <h1 style={{fontSize:fontSize}} className={`font-bold tracking-widest select-none text-center`}><span style={{ color: darkBlue }} >{LOGO.partOne}</span><span style={{ color: lightBlue }}>{LOGO.partTwo}</span></h1>
  )
}

export default Logo