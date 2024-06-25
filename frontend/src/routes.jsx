import Products from "./components/Products/Products"
import Home from "./pages/Home/Home"
import LoginForm from "./pages/LoginForm/LoginForm"
import ProductPage from "./pages/ProductPage/ProductPage"


const routes = [
    // { path: "/", element: <Home /> },
    { path: "/", element: <Home /> },
    { path: "/loginForm", element: <LoginForm /> },
    { path: "/products/:productName", element: <ProductPage /> },
]

export default routes

