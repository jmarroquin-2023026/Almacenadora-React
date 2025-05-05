import { element } from "prop-types";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthPage } from "./pages/AuthPage";
import { ProductsPage } from "./pages/ProductsPage";
import { HomePage } from "./pages/HomePage";

export const routes=[
    {
        path:'/auth', 
        element: <Login />
    },
    {
        path:'/register',
        element:<AuthPage/>
    },
    {
        path:'/products',
        element:<ProductsPage/>
    },
    {
        path:'/',
        element:<HomePage/>
    }
]