import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/SignUp/Login";
import ProductDetails from "../components/ProductDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/> 
            },
            {
                path: '/product/:id',
                element: <ProductDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/furniture/${params.id}`)

            }
        ]
    }
])

export default router;