import React from "react";
import '../App.css';
// import { NavLink } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {useNavigate} from "react-router-dom";
// import { Link } from "react-router-dom";
// import SignUp from './SignUp'



function LogIn() {
    const navigate = useNavigate();
    // Function to handle navigation to Sign Up page
    const handleSignUp = () => {
        navigate('SignUp');
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[90%] max-w-sm md:max-x-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
                {/* <img src="/background-image.jpg" alt="logo" className="w-12 md:w-14" /> */}
                <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>
                <p className="text-xs md:text-sm text-gray-500 text-center">Don't have an account?
                    <span className="text-white cursor-pointer ml-1" onClick={handleSignUp}>Sign Up</span>
                </p>
                <div className="w-full flex flex-col gap-3">
                    {/* Email Section */}
                    <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
                        <MdAlternateEmail />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>
                    {/* Password section */}
                    <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
                        <FaFingerprint />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                        {showPassword ? (
                            < FaEyeSlash className="mr-3 cursor-pointer" onClick={togglePasswordVisibility} />
                        ) : (
                            < FaEye className="mr-3 cursor-pointer" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded-xl mt-3 text-sm md:text-base hover:bg-blue-700 transition duration-200">
                    Log In
                </button>

                {/* Sign in with */}

                <div className="relative w-full flex items-center justify-center py-3">
                    <div className="w-2/3 h-[2px] bg-gray-800"></div>
                    <h3 className="text-xs md:text-sm px-4 text-gray-500">Or</h3>
                    <div className="w-2/3 h-[2px] bg-gray-800"></div>

                </div>

                <div className="relative w-full flex items-center justify-between py-3">
                    <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 shadow-lg">
                        {/* <span className="text-xs md:text-sm text-white-500">Forgot Password?</span> */}
                        <FaApple className="text-lg md:text-xl " />
                    </div>
                    <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 shadow-lg">
                        {/* <img src="/google-icon.png" alt="" /> */}
                        <FaGoogle />
                    </div>
                    <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 shadow-lg">
                        <FaXTwitter className="text-lg md:text-xl " />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogIn;