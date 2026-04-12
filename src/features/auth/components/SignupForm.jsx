
import { useSelector } from 'react-redux'
import { darkBlue, proceedBtnTxt, showPasswordTxt, signInTitle } from '../../../utils/constants'
import { faForward, faLock, faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSignupForm } from '../hooks'
import Button from '../../../components/Button'

const SignupForm = () => {
    const navigate = useNavigate()
    const { handleSignup, setFirstName, firstName, setLastName, lastName, setEmail, email, setPass, pass, setConfirmPass, confirmPass } = useSignupForm()
    const { message, isError, isLoading } = useSelector(store => store.auth)
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <div className="w-[50%]">
            <div className="px-5 relative bg-white py-5 rounded-2xl w-[60%] mx-auto space-y-3 shadow-lg shadow-[#a6c2c2]">
                <h2 className="text-2xl font-semibold text-center text-[#012D52]">
                    {signInTitle}
                </h2>
                <form onSubmit={handleSignup} className="w-full space-y-3">

                    {/* Email */}
                    <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                        <FontAwesomeIcon color={darkBlue} className="" icon={faUser} />
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            autoFocus
                            required
                            tabIndex={1}
                            className="outline-none ml-2 w-full"
                            type="text"
                            placeholder="Please enter your email"
                            name="email"
                        />
                    </div>
                    {/* Full Name */}
                    <div className='flex items-center gap-3'>
                        <div className="flex items-center outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                            <input
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                value={firstName}
                                tabIndex={2}
                                required
                                className="outline-none w-full"
                                type="text"
                                placeholder="First name"
                                name="fullname"
                            />
                        </div>
                        <div className="flex items-center outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                            <input
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                value={lastName}
                                tabIndex={3}
                                required
                                className="outline-none w-full"
                                type="text"
                                placeholder="Last name"
                                name="fullname"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                        <FontAwesomeIcon color={darkBlue} className="" icon={faLock} />
                        <input
                            onChange={(e) => {
                                setPass(e.target.value)
                            }}
                            value={pass}
                            tabIndex={4}
                            required
                            className="outline-none ml-2 w-full"
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    <div>
                        {/* Confirm Password */}
                        <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white mb-2">
                            <FontAwesomeIcon color={darkBlue} className="" icon={faKey} />
                            <input
                                onChange={(e) => {
                                    setConfirmPass(e.target.value)
                                }}
                                value={confirmPass}
                                tabIndex={5}
                                required
                                className="outline-none ml-2 w-full"
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                name="password"
                            />
                        </div>
                        {/* Show password */}
                        <label
                            onChange={() => setIsShowPassword(prev => !prev)}
                            style={{ color: darkBlue }}
                            className="font-semibold select-none w-fit flex items-center cursor-pointer gap-2"
                            htmlFor="showpassword"
                        >
                            <input
                                tabIndex={6}
                                id="showpassword"
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer"
                            />
                            {showPasswordTxt}
                        </label>
                    </div>
                    <div className="space-y-1">
                        {isError && message && <p className="text-red-500 text-sm">{message}</p>}
                        <Button btnTxt={proceedBtnTxt} icon={faForward} isLoading={isLoading} />
                    </div>

                </form>
                <div className="flex items-center justify-end">
                    <p onClick={() => navigate("/auth/login")} className="text-[#0b8585] select-none text-sm font-semibold hover:underline cursor-pointer">
                        Already have an account?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignupForm