import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleVerifyToken } from '../utils/constants'
import { setIsAuthChecked, setIsAuthenticated, setUser } from '../features/auth/slices/authSlice'

const AuthInitializer = ({ children }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Authinitializer")
        const verify = async () => {
            try {
                const response = await handleVerifyToken()
                if (response?.valid) {
                    dispatch(setIsAuthenticated(true))
                    dispatch(setUser(response.user))
                }
            } catch (error) {
                console.log("Token verification failed")
            } finally {
                dispatch(setIsAuthChecked(true))
            }
        }
        verify()
    }, [])


    return children
}

export default AuthInitializer