import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.sass'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Portfolio from "./components/pages/Portfolio/Portfolio";
// import Services from "./components/pages/Services/Services";
import Subscribe from "./components/pages/Subscribe/Subscribe";
import TalkUs from "./components/pages/TalkUs/TalkUs";
import ErrorPage from './components/pages/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Subscribe",
        element: <Subscribe />,
      },
      {
        path: "/TalkUs",
        element: <TalkUs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)