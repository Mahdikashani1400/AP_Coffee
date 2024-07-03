import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../../Contexts/AppContext';

export default function SidebarC() {
    const contextData = useContext(AppContext);
    const menuHandler = () => {
        contextData.setOpenMenuC(prevState => !prevState)
    }
    const goToLoginHandler = () => {
        contextData.setUserInfo(null)
        localStorage.setItem('token', "")
    }
    return (
        <>
            <div className={`header__nav ${contextData.openMenuC || window.innerWidth < 1024 ? "mobile" : ""}`}>



                <div
                    class="absolute w-10 h-10 dark:bg-[#14141E] bg-[#F5F5F9] -left-5 top-1/2 rounded-full flex items-center justify-center shape cursor-pointer"
                    id="menuBtn"
                    onClick={menuHandler}
                >
                    <svg
                        class="w-[26px] h-[26px] p-[2.5px] bg-blue-primary rounded-full dark:text-black text-white"
                    >
                        <use href="#chevron-right"></use>
                    </svg>
                </div>
                <div class="nav__logo w-36 flex justify-center relative">
                    <img class="dark:invert" src="../img/logo-dark.png" alt="" />
                </div>
                <ul class="header__menu">
                    <a
                        href="#"
                        class="name__container flex flex-col gap-x-2 dark:text-white text-zinc-800 items-center md:hidden p-0 mb-7 mt-2"
                    >
                        <p class="flex items-center gap-x-1.5 order-1 md:-order-1">
                            <span class="admin__name"></span>
                        </p>

                        <img
                            class="w-12 h-12 rounded-full"
                            src="../img/teachers/t3.jpg"
                            alt=""
                        />
                    </a>
                    <NavLink className="" to="/homeC">

                        <svg class="w-5 h-5">
                            <use href="#home"></use>
                        </svg>
                        <span>صفحه اصلی</span>
                    </NavLink>
                    <NavLink to={"/warehouseManagement"}>

                        <svg class="w-5 h-5">
                            <use href="#inbox-arrow-down"></use>
                        </svg>
                        <span>مدیریت انبار</span>
                    </NavLink>
                    <NavLink to={"/addProduct"}>

                        <svg class="w-5 h-5">
                            <use href="#shopping-bag"></use>
                        </svg>
                        <span>افزودن محصول</span>
                    </NavLink>
                    <NavLink to={"/loginForm"} className="text-red-500"
                        onClick={goToLoginHandler}><svg class="w-5 h-5">
                            <use href="#power"></use>
                        </svg>
                        <span>خروج</span>
                    </NavLink>
                </ul>



            </div>   </>
    )
}