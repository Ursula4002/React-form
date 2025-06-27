import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page.jsx";
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,   // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
//   },
//   // tu peux ajouter d’autres routes ici si besoin
//   { path: '/', element: <LogIn /> },
//   { path: '/SignUp', element: <SignUp /> },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );