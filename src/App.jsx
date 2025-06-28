import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn.jsx";
import ErrorPage from "./components/error-page.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import Home from "./Pages/home.jsx";

// Define the routes for the application

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />, // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  { path: "/SignUp", element: <SignUp />, 
    errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  { path: "/ForgotPassword", element: <ForgotPassword />,
    errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  { path: "/home", element: <Home /> 
    , errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
