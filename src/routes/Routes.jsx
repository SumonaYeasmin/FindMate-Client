import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import LostItems from "../pages/LostItems";
import FoundItems from "../pages/FoundItems";
import AddItems from "../pages/AddItems";
import AllRecoverd from "../pages/AllRecoverd";
import Login from "../pages/Login";
import Register from "../pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/lost-items",
            element: <LostItems></LostItems>
        },
        {
            path: "/found-items",
            element: <FoundItems />
        },
        {
            path: "/add-items",
            element: <AddItems />
        },
        {
            path: "/all-recoverd",
            element: <AllRecoverd />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
      ] 
    },
  ]); 
export default router