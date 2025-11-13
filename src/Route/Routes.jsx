import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from '../Pages/Home'
import AllCrops from "../Pages/AllCrops";
// import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import PrivateRoute from "../Route/PrivateRoute"
import CropDetails from "../Pages/CropDetails";
// import AddCrop from "../Pages/AddCrop/AddCrop";
// import MyPosts from "../Pages/MyPosts/MyPosts";
// import MyInterests from "../Pages/MyInterests/MyInterests";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", 
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:3000/crops/latest'),
    },
      { path: "/all-crops", 
        element: <AllCrops /> ,
        loader: ()=> fetch('http://localhost:3000/crops'),
      },
      // { path: "/profile", element: <PrivateRoute><Profile /></PrivateRoute> },
      // { path: "/add-crop", element: <PrivateRoute><AddCrop /></PrivateRoute> },
      // { path: "/my-posts", element: <PrivateRoute><MyPosts /></PrivateRoute> },
      // { path: "/my-interests", element: <PrivateRoute><MyInterests /></PrivateRoute> },
      { path: "/crop-details/:id", element:
         <PrivateRoute>
          <CropDetails></CropDetails>
          </PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/crops/${params.id}`)  
        },
          
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
]);
