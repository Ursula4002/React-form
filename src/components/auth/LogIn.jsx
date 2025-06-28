import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [RememberMe, setRememberMe] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle navigation to Sign Up page
  const handleSignUp = () => {
    navigate("SignUp");
  };

  // Validation schema using Yup

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .trim()
      .test("no-only-spaces", "Email cannot be only spaces", val => val && val.trim().length > 0),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .trim()
      .test("no-only-spaces", "Password cannot be only spaces", val => val && val.trim().length > 0),
    remember: Yup.boolean(),
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email.trim(),
      password: password.trim(),
      remember: RememberMe,
    };

    try {
      await loginSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("✅ Form valid. Sending data:", formData);
      // If validation passes, proceed with login logic
    } catch (error) {
      // If validation fails, set errors
      const validationErrors = {};
      error.inner.forEach(e => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-sm md:max-x-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        {/* <img src="/background-image.jpg" alt="logo" className="w-12 md:w-14" /> */}
        <h1 className="text-lg md:text-xl font-semibold mt-5">Welcome Back</h1>
        <p className="text-xs md:text-sm text-gray-500 text-center mb-5">
          Don't have an account?
          <span
            className="text-white cursor-pointer ml-1"
            onClick={handleSignUp}
          >
            Sign Up
          </span>
        </p>
        <div className="w-full flex flex-col gap-3">
          {/* Email Section */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <MdAlternateEmail />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          {/* Password section */}

          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <FaFingerprint />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

          {/* Remember Me */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-xs md:text-sm">
              <input 
                type="checkbox" 
                id="rememberMe" 
                checked={RememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-3 mr-2" 
              />
              <label htmlFor="rememberMe" className="text-xs md:text-sm text-gray-500 hover:text-white">
                Remember Me
              </label>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/ForgotPassword" className="text-xs md:text-sm text-gray-500 hover:text-white">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded-xl mt-3 text-sm md:text-base hover:bg-blue-700 transition duration-200">
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

export default LogIn;
