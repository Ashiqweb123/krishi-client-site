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

import ProfilePage from "../Pages/ProfilePage";
import FAQPage from "../Pages/FAQPage";
import AboutPage from "../Pages/AboutPage";
import FeaturedCrops from "../Pages/FeaturedCrops";
import FeaturedCropsWithReviews from "../Pages/FeaturedCropsWithReviews";
import TermsAndConditions from "../Pages/TermsAndConditions";
import ContactUs from "../Pages/Contact";

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
        path: "/feauture-crops",
        element: <FeaturedCrops></FeaturedCrops>,
      },

      {
        path: "terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },

      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/reviewes",
        element: <FeaturedCropsWithReviews></FeaturedCropsWithReviews>,
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
        element: <CropDetails />,
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
    path: "profile",
    element: <ProfilePage></ProfilePage>,
  },

  {
    path: "faq",
    element: <FAQPage></FAQPage>,
  },
  {
    path: "terms",
    element: <TermsAndConditions></TermsAndConditions>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
