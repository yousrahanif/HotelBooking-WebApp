import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Book from './pages/Book/Book.jsx';
import Google from './pages/Google/Google.jsx';
import AuthProviders from './pages/AuthProviders/AuthProviders.jsx';
import PrivateRoutes from './pages/PrivateRoutes/PrivateRoutes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/', 
        element: <Home></Home>
      }, 
      {
        path:'/login', 
        element:<Login></Login>,

      },
      {
        path:'/register', 
        element: <Register></Register>,
      }, 
      {
        path: '/book', 
        element:<PrivateRoutes><Book></Book></PrivateRoutes>
      
      },
      {
        path: '/google', 
        element:<Google></Google>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
     <RouterProvider router={router} />
     </AuthProviders>
  </React.StrictMode>,
)
