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


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <ToysDetails></ToysDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toysshop/${params.id}`)
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                
            },
            {
                path: 'addtoy',
                element: <AddToy></AddToy>
            },
            {
                path: 'updatetoy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`http://localhost:5000/addtoys/${params.id}`)
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            }
        ]
    }
])

export default router;