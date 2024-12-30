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
import UpdateItems from "../pages/UpdateItems";
import PrivateRoute from "../pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/myItems",
        element: <PrivateRoute><ManageMyItems /></PrivateRoute>,
      },
      {
        path: "/allItems",
        element: <LostAndFoundItems />,
        loader: () => fetch('http://localhost:5000/allItems')
      },

      {
        path: "/addItems",
        element: <PrivateRoute><AddLostAndFoundItem /></PrivateRoute>
      },
      {
        path: "/allRecovered",
        element: <PrivateRoute><AllRecoverdItems /></PrivateRoute>
      },
      {
        path: "/items/:id",
        element: <PrivateRoute><ItemDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allItems/${params.id}`)
      },
      {
        path: '/updatedItems/:id',
        element: <PrivateRoute><UpdateItems /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allItems/${params.id}`)
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