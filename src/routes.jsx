import { element } from "prop-types";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthPage } from "./pages/auth/AuthPage";
import { ProductsPage } from "./pages/products/ProductsPage";

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
    }
]