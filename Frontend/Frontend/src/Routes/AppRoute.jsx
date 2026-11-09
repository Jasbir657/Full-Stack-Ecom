import { createBrowserRouter, RouterProvider } from "react-router"
import MainProtected from "../Layout/MainProtected"
import LoginPage from "../features/Auth/ui/Pages/LoginPage"
import RegisterPage from "../features/Auth/ui/Pages/RegisterPage"
import PublicProtected from "../Layout/PublicProtected"
import HomePage from "../Shared/HomePage"
import ProductsPage from "../features/Products/ui/ProductPage"
import AboutPage from "../Shared/AboutPage"
import AdminOnly from "../Layout/AdminOnly"
import AdminProductPage from "../features/Admin/ui/AdminProductPage"
import AdminProducts from "../features/Admin/ui/AdminProductsUpdate"
import EditProductModal from "../features/Admin/ui/EditProductModel"

const AppRoute = () => {
 
 
    const router = createBrowserRouter([
        {
            path : "/",
            element : <MainProtected/>,
            children : [ 
                {
                    path : "",
                    element : <LoginPage/>
                },
                {
                    path : "/register",
                    element : <RegisterPage/>
                }
            ]
        },
        {
            path : "/home",
            element : <PublicProtected/>,
            children : [
                {
                    path : "",
                    element : <HomePage/>
                },
                {
                    path : "products",
                    element : <ProductsPage/>
                },
                {
                    path : "about",
                    element : <AboutPage/>
                },

            ]
        },{
            path : "/admin",
            element : <AdminOnly/>,
            children : [
                {
                    path : "",
                    element : <AdminProductPage/>
                },
                {
                    path : "updateProductsList",
                    element : <AdminProducts/>
                },
                {
                    path : "editProduct",
                    element : <EditProductModal/>
                }
            ]
          }
    ])
 
 

    return <RouterProvider router={router}/>

}

export default AppRoute