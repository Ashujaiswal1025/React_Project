import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home'
import User from './components/User/User'
import Contact from './components/Contact/Contact'
import Layout from './Layout'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './components/About/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'user/:userid',
        element: <User />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
