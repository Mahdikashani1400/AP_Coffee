import SidebarC from "./components/CMS/SidebarC/SidebarC"
import WarehouseManagement from "./pages/CMS/WarehouseManagement/WarehouseManagement"

import Products from "./components/Products/Products"
import HomeC from "./pages/CMS/HomeC/HomeC"
import Home from "./pages/Home/Home"
import LoginForm from "./pages/LoginForm/LoginForm"
import ProductPage from "./pages/ProductPage/ProductPage"
import AddProduct from "./pages/AddProduct/AddProduct"


const routes = [
    // { path: "/", element: <Home /> },
    { path: "/", element: <Home /> },
    { path: "/loginForm", element: <LoginForm /> },
    { path: "/products/:productName", element: <ProductPage /> },
    { path: "/homeC", element: <HomeC /> },
    { path: "/warehouseManagement", element: <WarehouseManagement /> },
    { path: "/addProduct", element: <AddProduct /> },
]

export default routes

