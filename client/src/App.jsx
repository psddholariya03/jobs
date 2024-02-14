// import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<Landing />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  // {
  //   path: "/about",
  //   element: (
  //     <div>
  //       <h2>about page</h2>
  //     </div>
  //   ),
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;