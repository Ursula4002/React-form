
import React, { useState } from "react";
import * as Yup from "yup";


function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);


  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .trim()
      .test("no-only-spaces", "Email cannot be only spaces", val => val && val.trim().length > 0),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email.trim(),
    };

    try {
      await schema.validate({ email }, { abortEarly: false });
      setErrors({});
      // Simuler l'envoi d'un email
      setSuccess(true);
      console.log("Envoi du lien de réinitialisation à :", email);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-sm bg-gray-900 p-5 rounded-xl text-white shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-center">Forgot Password</h2>

        {!success ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-gray-800 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded text-white"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <p className="text-green-400 text-sm text-center">
            ✅ A reset link has been sent to <strong>{email}</strong>
          </p>
        )}
      </div>
    </div>
  );

}
export default ForgotPassword;
