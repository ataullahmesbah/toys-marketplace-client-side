import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import AddToy from "../Pages/AddToy/AddToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllToys from "../Pages/AllToys/AllToys";
import AllToysInformation from "../Pages/AllToysInformation/AllToysInformation";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'toysdetails/:id',
                element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>
                
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                
            },
            {
                path: 'addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'updatetoy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`https://assignment-11-server-side-gray.vercel.app/addtoys/${params.id}`)
            },
            {
                path: 'alltoys',
                element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
            },
            {
                path: 'alltoysinformation/:id',
                element: <PrivateRoute>
                    <AllToysInformation></AllToysInformation>
                </PrivateRoute>
            }
        ]
    }
])

export default router;