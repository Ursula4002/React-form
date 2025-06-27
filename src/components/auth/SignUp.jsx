import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";


function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-sm md:max-x-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <h1 className="text-lg md:text-xl font-semibold mt-5">Create an Account</h1>
        <p className="text-xs md:text-sm text-gray-500 text-center mb-5">
          Already have an account?
          <span
            className="text-white cursor-pointer ml-1"
            onClick={handleLogin}
          >
            Log In
          </span>
        </p>

        <div className="w-full flex flex-col gap-3">
          {/* Email */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <MdAlternateEmail />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>

          {/* Password */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <FaFingerprint />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
            {showPassword ? (
              <FaEyeSlash
                className="mr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="mr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          {/* Confirm Password */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <FaFingerprint />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
            {showConfirmPassword ? (
              <FaEyeSlash
                className="mr-3 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            ) : (
              <FaEye
                className="mr-3 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            )}
          </div>
        </div>

        <button className="w-full bg-green-500 text-white p-2 rounded-xl mt-3 text-sm md:text-base hover:bg-green-700 transition duration-200">
          Sign Up
        </button>

        {/* Or separator */}
        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
          <h3 className="text-xs md:text-sm px-4 text-gray-500">Or</h3>
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
        </div>

        {/* Auth with icons */}
        <div className="relative w-full flex items-center justify-between py-3">
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 shadow-lg">
            <FaApple className="text-lg md:text-xl " />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 shadow-lg">
            <img src="src/components/google_logo.png" alt="Google logo" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 shadow-lg">
            <FaXTwitter className="text-lg md:text-xl " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
