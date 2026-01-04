import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllCrops from "../Pages/AllCrops";

import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import PrivateRoute from "../Route/PrivateRoute";
import CropDetails from "../Pages/CropDetails";
import AddCrops from "../Pages/AddCrops";
import MyPosts from "../Pages/MyPosts";
import MyInterests from "../Pages/MyInterests";
import ErrorPage from "../Pages/ErrorPage";
import CropCategories from "../Pages/CropCategories";
import FAQ from "../Pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://krishilinkapp.vercel.app/crops/latest"),
      },
      {
        path: "/all-crops",
        element: <AllCrops />,
        loader: () => fetch("https://krishilinkapp.vercel.app/crops"),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/categories",
        element: <CropCategories />,
      },
      {
        path: "/add-crop",
        element: (
          <PrivateRoute>
            <AddCrops />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
        loader: () => fetch("https://krishilinkapp.vercel.app/crops"),
      },
      {
        path: "/my-interests",
        element: (
          <PrivateRoute>
            <MyInterests />
          </PrivateRoute>
        ),
        loader: () => fetch("https://krishilinkapp.vercel.app/interests"),
      },
      {
        path: "/crop-details/:id",
        element: (
          <PrivateRoute>
            <CropDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://krishilinkapp.vercel.app/crops/${params.id}`),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
