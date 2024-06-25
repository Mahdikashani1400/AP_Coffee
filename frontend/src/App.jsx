import { useState } from 'react'

import './App.css'
import { useLocation, useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AppContextProvider, { AppContext } from './Contexts/AppContext'
import routes from './routes'

function App() {
  const router = useRoutes(routes)
  // const location = useLocation()
  const [openMenu, setOpenMenu] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [signIn, setSignIn] = useState(false);

  let contextValue = {
    openMenu,
    setOpenMenu,
    openBasket,
    setOpenBasket,
    darkTheme,
    setDarkTheme,
    signIn, setSignIn
  };
  return (
    <div className={`app_container ${darkTheme ? "dark" : ""} ${openMenu || openBasket ? "open" : ""}`}>
      <AppContextProvider value={contextValue}>

        <div className='font-IRANSans  bg-gray-100 customize-zoom dark:bg-zinc-800 '>
          {router}


        </div>
      </AppContextProvider>

    </div>
  )
}

export default App