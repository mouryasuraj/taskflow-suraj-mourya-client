import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { darkBlue, createAnAccountTxt, forgotPassTxt, loginTitle, proceedBtnTxt, showPasswordTxt } from "../../../utils/constants";
import { useState } from "react";
import { useLoginForm } from "../hooks";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button.jsx";

const LoginForm = () => {
    const navigate = useNavigate()
    const { handleSubmit, setPass, setEmail, pass, email } = useLoginForm()
    const { message, isLoading } = useSelector(store => store.auth)
    const [isShowPassword, setIsShowPassword] = useState(false)


    return (
        <div className="lg:w-[50%] w-full">
            <div className="px-5 relative bg-white py-12 rounded-2xl lg:w-[60%] w-full mx-auto space-y-3 shadow-lg shadow-[#a6c2c2]">
                <h2 className="text-2xl font-semibold text-center text-[#012D52]">
                    {loginTitle}
                </h2>
                <form onSubmit={handleSubmit} className="w-full space-y-2">
                    {/* Email */}
                    <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                        <FontAwesomeIcon color={darkBlue} className="" icon={faUser} />
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required={true}
                            autoFocus
                            tabIndex={1}
                            value={email}
                            className="outline-none ml-2 w-full"
                            type="email"
                            placeholder="Email ID"
                            name="email"
                        />
                    </div>

                    <div>
                        {/* Password */}
                        <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white mb-2">
                            <FontAwesomeIcon color={darkBlue} className="" icon={faLock} />
                            <input
                                onChange={(e) => {
                                    setPass(e.target.value)
                                }}
                                required={true}
                                tabIndex={2}
                                value={pass}
                                className="outline-none ml-2 w-full"
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
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


                                tabIndex={3}
                                id="showpassword"
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer"
                            />
                            {showPasswordTxt}
                        </label>
                    </div>
                    <div className="space-y-1">
                        {message && <p className="text-red-500 text-sm">{message}</p>}
                        <Button btnTxt={proceedBtnTxt} icon={faForward} isLoading={isLoading} />
                    </div>

                </form>
                <div className="flex items-center justify-end">
                    <p onClick={() => navigate("/auth/signup")} className="text-[#0b8585] select-none text-sm font-semibold hover:underline cursor-pointer">
                        {createAnAccountTxt}
                    </p>
                </div>
            </div>


        </div>
    );
};

export default LoginForm;
