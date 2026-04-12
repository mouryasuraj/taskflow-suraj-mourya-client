import { useSelector } from "react-redux"
import SpinnerLoader from "./SpinnerLoader"
import { Navigate} from "react-router-dom"


const ProtectedRoute = ({ children }) => {

  const { isAuthenticated, isAuthChecked } = useSelector(store => store.auth)

  if (!isAuthChecked) return <SpinnerLoader />

  if (!isAuthenticated) return <Navigate to={"/auth/login"} replace />

  return children
}

export default ProtectedRoute