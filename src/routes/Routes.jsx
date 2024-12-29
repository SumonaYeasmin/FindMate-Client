import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";

import ManageMyItems from "../pages/ManageMyItems";

import AllRecoverdItems from "../pages/AllRecoverdItems";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddLostAndFoundItem from "../pages/AddLostAndFoundItem";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import ItemDetails from "../pages/PostDetails";

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
            path: "/myItems",
            element:  <ManageMyItems></ManageMyItems>,
        },
        {
            path: "/allItems",
            element:  <LostAndFoundItems />,
            loader: ()=> fetch('http://localhost:5000/allItems')
        },

        {
            path: "/addItems",
            element: <AddLostAndFoundItem></AddLostAndFoundItem>
        },
        {
            path: "/allRecovered",
            element: <AllRecoverdItems />
        },
        {
          path: "/items/:id",
          element: <ItemDetails />,
          loader: ({params})=>fetch(`http://localhost:5000/allItems/${params.id}`)
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