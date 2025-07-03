import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn.jsx";
import ErrorPage from "./components/error-page.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import Home from "./Pages/home.jsx";
import Den from "./Pages/den.jsx";
import Notifications from "./Pages/notifications.jsx"
import Settings from "./Pages/settings.jsx"
import Profil from "./Pages/profil.jsx";

// Define the routes for the application

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />, // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  {
    path: "/SignUp", element: <SignUp />,
    errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  {
    path: "/ForgotPassword", element: <ForgotPassword />,
    errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  {
    path: "/home", element: <Home />
    , errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  {
    path: "/den", element: <Den />,
    errorElement: <ErrorPage />
  },
    {
    path: "/notifications", element: <Notifications />,
    errorElement: <ErrorPage />
  },
    {
    path: "/settings", element: <Settings />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profil", element: <Profil />,
    errorElement: <ErrorPage /> // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
