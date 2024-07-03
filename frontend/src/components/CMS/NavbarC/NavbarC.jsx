import React, { useContext } from 'react'
import { AppContext } from '../../../Contexts/AppContext';

export default function NavbarC() {
    const contextData = useContext(AppContext);
    const changeThemeHandler = () => {
        contextData.setDarkTheme(prevState => !prevState)
    }
    const adminInfo = contextData.userInfo
    return (
        <div><header class="header">

            <div class="container">
                <div class="flex items-center dark:bg-black-dark bg-white rounded-md sm:p-3 justify-between shadow-main">
                    <div class="w-full md:w-fit flex items-center sm:justify-between justify-center md:justify-start gap-x-4 lg:gap-x-8">
                        <div class="md:w-fit sm:w-80 w-full h-12 flex items-center md:py-6 md:px-4 px-2 py-03 dark:bg-gray-700 bg-gray-200 rounded-md dark:text-white text-black">
                            <svg class="w-5 h-5 dark:text-gray-300 text-light-primary">
                                <use href="#magnifying-glass"></use>
                            </svg>
                            <input class="bg-transparent border-none focus:outline-none focus:shadow-none sm:w-80 w-full px-3" type="text" />
                        </div>
                        <div class="relative sm:flex hidden group">
                            <a href="#" class="relative">
                                <svg class="w-7 h-7 text-light-primary dark:text-gray-300">
                                    <use href="#bell"></use>
                                </svg>
                                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-2 dark:border-gray-900">
                                    20
                                </div>
                            </a>

                        </div>
                        <div class="themeToggle hidden md:inline-block cursor-pointer" onClick={changeThemeHandler}>
                            <svg class="w-7 h-7 text-gray-300 dark:inline-block hidden">
                                <use href="#sun"></use>
                            </svg>
                            <svg class="w-6 h-6 text-light-primary dark:hidden inline-block">
                                <use href="#moon"></use>
                            </svg>
                        </div>
                        <div class="themeToggle fixed bottom-4 left-4 dark:bg-gray-700 bg-white z-10 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center md:hidden cursor-pointer" onClick={changeThemeHandler}>
                            <svg class="w-7 h-7 text-gray-300 dark:inline-block hidden">
                                <use href="#sun"></use>
                            </svg>
                            <svg class="w-6 h-6 text-light-primary dark:hidden inline-block">
                                <use href="#moon"></use>
                            </svg>
                        </div>
                    </div>
                    <a href="#" class="md:flex hidden gap-x-2 lg:gap-x-4 dark:text-white text-zinc-800 font-semibold items-center">
                        <p class="flex items-center gap-x-1.5 order-1 md:-order-1">
                            <svg class="w-4 h-4 rotate-90 stroke-1">
                                <use href="#chevron-right"></use>
                            </svg>
                            <span class="admin__name">{adminInfo.full_name}</span>

                        </p>

                        <img class="w-12 h-12 rounded-full" src="/images/admin.jpg" alt="" />
                    </a>
                </div>
            </div>

        </header>


        </div>
    )
}
