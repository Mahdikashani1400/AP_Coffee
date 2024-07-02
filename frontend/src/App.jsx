import { useEffect, useState } from 'react'

import './App.css'
import { useLocation, useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AppContextProvider, { AppContext } from './Contexts/AppContext'
import routes from './routes'
import Icons from './components/Icons/Icons'
import { getItemLocale } from './data'
import UseFetch from './customHooks/UseFetch'

function App() {
  const router = useRoutes(routes)
  // const location = useLocation()
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuC, setOpenMenuC] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('theme'))) || useState(false);
  const [signIn, setSignIn] = useState(false);

  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('info'))['user']) || useState(null)
  const [productsInfo, setProductsInfo] = useState([])
  const [basketInfo, setBasketInfo] = useState(JSON.parse(localStorage.getItem('user-basket'))) || useState({
    products: [],
    totalPrice: 0
  })


  useEffect(() => {
    const token = getItemLocale("token")

    const reqInfo = { pathKey: "products", method: "GET", token: token, type: null }

    const fetchData = async () => {

      const [status, productResult] = await UseFetch(reqInfo)
      setProductsInfo(productResult)

    }
    fetchData()
  }, [])

  let contextValue = {
    openMenu,
    setOpenMenu,
    openBasket,
    setOpenBasket,
    darkTheme,
    setDarkTheme,
    signIn,
    setSignIn,
    userInfo,
    setUserInfo,
    openMenuC,
    setOpenMenuC,
    productsInfo,
    setProductsInfo,
    basketInfo,
    setBasketInfo,

  };
  return (
    <div className={`app_container ${darkTheme ? "dark" : ""} ${openMenu || openBasket ? "open" : ""}`}>
      <AppContextProvider value={contextValue}>

        <div className='font-IRANSans  bg-gray-100 customize-zoom dark:bg-zinc-800 '>
          <Icons />

          {router}


        </div>
      </AppContextProvider>

    </div>
  )
}

export default App