import { Outlet } from "react-router-dom"
import useUserLayout from "./hooks/useUserLayout"
import Navbar from "../components/Navbar/Navbar"


const UserLayout = () => {

  useUserLayout()

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen px-[1vw] py-4 ">
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout