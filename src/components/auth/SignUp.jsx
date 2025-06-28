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

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  
  // Show and hide password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  // navigation to Log In page
  const handleLogin = () => {
    navigate("/");
  };

  // Validation schema using Yup
  const signUpSchema = Yup.object().shape({
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required")
      .trim()
      .test("no-only-spaces", "Confirm Password cannot be only spaces", val => val && val.trim().length > 0),
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
  };

  try {
    await signUpSchema.validate(formData, { abortEarly: false });
    setErrors({});
    console.log("✅ Form valid. Sending data:", formData);
    // If validation passes, proceed with sign-up logic
    navigate("/home");
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <FaFingerprint />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
        </div>

        <button onClick={handleSubmit} className="w-full bg-green-500 text-white p-2 rounded-xl mt-3 text-sm md:text-base hover:bg-green-700 transition duration-200">
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
