
import { useSelector } from 'react-redux'
import Error from '../components/Error'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Toastify from '../components/Toastify'
import Auth from '../features/auth/Auth'
import Login from '../features/auth/components/Login'
import SignUp from '../features/auth/components/SignUp'
import ProtectedRoute from '../components/ProtectedRoute'
import UserLayout from '../Layout/UserLayout'
import Projects from '../features/projects/Projects'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <UserLayout />
    </ProtectedRoute>,
    children: [
      {
        path: "/projects",
        element: <Projects /> ,
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
    ]
  },
  {
    path: "*",
    element: <Error />
  }
])


function App() {

  const { isAuthChecked, isAuthenticated } = useSelector(store => store.auth)

  console.log("app.jsx", isAuthChecked, isAuthenticated)


  return (
    <div>
      <RouterProvider router={router} />
      <Toastify />
    </div>
  )
}

export default App
