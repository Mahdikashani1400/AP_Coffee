import { useEffect, useState } from 'react'

import './App.css'
import { useLocation, useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AppContextProvider, { AppContext } from './Contexts/AppContext'
import routes from './routes'
import Icons from './components/Icons/Icons'
import { getItemLocale } from './data'
import UseFetch from './customHooks/UseFetch'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


function App() {
  const router = useRoutes(routes)
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 5000
      }
    }
  });

  // const location = useLocation()
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuC, setOpenMenuC] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('theme'))) || useState(false);
  const [signIn, setSignIn] = useState(false);

  let userInfoLocale = null
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user-info'))) || useState(null)
  const [productsInfo, setProductsInfo] = useState([])
  const [basketInfo, setBasketInfo] = JSON.parse(localStorage.getItem('user-basket')) ? useState(JSON.parse(localStorage.getItem('user-basket'))) : useState({
    products: [],
    totalPrice: 0
  })
  // console.log(basketInfo);

  const [mental, setMental] = useState({
    sugar: ["شکر", 100],
    flour: ["آرد", 100],
    chocolate: ["شکلات", 100],
    coffee: ["کافئین", 100]
  });

  const [instance, setInstance] = useState({
    name: "",
    price: 0,
    category: "coffee",
    image: ""
  })



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
    mental,
    setMental,
    instance,
    setInstance,

  };
  return (
    <div className={`app_container ${darkTheme ? "dark" : ""} ${openMenu || openBasket ? "open" : ""}`}>
      <AppContextProvider value={contextValue}>
        <QueryClientProvider client={client}>

          <div className='font-IRANSans  bg-gray-100 customize-zoom dark:bg-zinc-800 '>
            <Icons />

            {router}


          </div>
          <ReactQueryDevtools position="top-right" initialIsOpen={true} />

        </QueryClientProvider>

      </AppContextProvider>

    </div>
  )
}

export default App