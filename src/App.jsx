// import { useState } from 'react'
// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './App.css'
// import SignUp from './components/Forms/SignUp'
// import LogIn from './components/Forms/LogIn'

// function App() {
//   const router = createBrowserRouter(
//     [
//       { path: '/', 
//         element: <LogIn /> 
//       },
//       // Add other routes here as needed
//       { path: '/SignUp', 
//         element: <SignUp /> 
//       },
//     ]
//   )
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App

// const router = createBrowserRouter([
//   { path: '/', element: <LogIn /> },
//   { path: '/SignUp', element: <SignUp /> },
// ]);


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './components/Forms/SignUp';
import LogIn from './components/Forms/LogIn';
import ErrorPage from "./components/error-page.jsx";

// Define the routes for the application


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />,   // ici la page qui s'affichera en cas d'erreur (route non trouvée, etc)
  },
  { path: '/SignUp', element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
