import { faHome } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"
import Logo from "./Logo/Logo"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center flex-col gap-4 justify-center h-screen">
      <Logo fontSize="40px" />
      <h2 className="text-2xl font-semibold">
        404 Page Not found!
      </h2>
      <div>
      <Button btnTxt={"Go to home"} icon={faHome} fn={()=> navigate("/projects")} />
      </div>
    </div>
  )
}

export default Error