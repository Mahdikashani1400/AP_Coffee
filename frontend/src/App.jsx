import { useState } from 'react'

import './App.css'
import { useLocation, useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AppContextProvider, { AppContext } from './Contexts/AppContext'
import routes from './routes'
import Icons from './components/Icons/Icons'

function App() {
  const router = useRoutes(routes)
  // const location = useLocation()
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuC, setOpenMenuC] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const [userInfo, setUserInfo] = useState(null)

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