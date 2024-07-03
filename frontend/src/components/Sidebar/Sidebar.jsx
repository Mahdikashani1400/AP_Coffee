import React, { useContext, useState } from 'react'
import { AppContext } from '../../Contexts/AppContext';
import { NavLink, useParams } from 'react-router-dom';
import products from '../../data';
export default function Sidebar() {
    const params = useParams()

    const contextData = useContext(AppContext);
    const menuHandler = () => {
        contextData.setOpenMenu(prevState => !prevState)
    }
    const basketHandler = () => {
        contextData.setOpenBasket(prevState => !prevState)
    }
    const changeThemeHandler = () => {
        contextData.setDarkTheme(prevState => {
            localStorage.setItem('theme', JSON.stringify(!prevState))
            return !prevState
        })
    }

    const isLogin = contextData.userInfo

    const goToLoginHandler = () => {
        if (isLogin) {
            contextData.setUserInfo(null)
            localStorage.setItem('token', "")
            localStorage.setItem('user-info', null)
        }
    }
    const [subOpen, setSubOpen] = useState(false)
    const subsetHandler = () => {
        setSubOpen(prevState => !prevState)
    }
    return (
        <>
            <div
                class="flex md:hidden justify-between items-center bg-white dark:bg-zinc-700 h-16 relative py-3 px-4 z-50"
            >
                <div class="cursor-pointer" id="barsBtn" onClick={menuHandler}>
                    <svg class="w-8 h-8 text-zinc-700 dark:text-white">
                        <use href="#bars-3"></use>
                    </svg>
                </div>
                <div
                    className={`fixed -right-64 top-0 bottom-0 w-64 min-h-screen transition-all duration-300 bg-white dark:bg-zinc-700 overflow-y-scroll scrollbar-customize ${contextData.openMenu ? "open" : ""}`}
                    id="mobileNav"
                >
                    <div
                        class="flex justify-between items-center mx-4 py-4 border-b border-white/10"
                    >
                        {
                            isLogin ? <>
                                <div class="flex gap-x-4 text-center text-white">

                                    <p className='text-orange-300'> {contextData.userInfo.full_name}</p>
                                    خوش آمدی
                                </div>
                            </> : <div class="flex gap-x-4">
                                <svg class="h-10 w-10 text-orange-300">
                                    <use href="#logo"></use>
                                </svg>
                                <svg class="h-[40px] w-[100px] text-orange-300">
                                    <use href="#logo-type"></use>
                                </svg>
                            </div>
                        }
                        <div class="cursor-pointer" onClick={menuHandler} id="markBtn">
                            <svg class="h-5 w-5 text-zinc-600 dark:text-white">
                                <use href="#x-mark"></use>
                            </svg>
                        </div>
                    </div>

                    <ul
                        class="flex flex-col gap-y-2 px-4 pt-6 pb-8 border-b border-white/10 child:flex child:text-base child:px-2.5 child:py-2 dark:text-white"
                        id="mobileMenu"
                    >
                        <li
                            class="font-DanaMedium  rounded-md"
                        >

                            <NavLink className={`flex`} to={"/"}>
                                <svg class="w-5 h-5 ml-2">
                                    <use href="#home"></use>
                                </svg>
                                صفحه اصلی</NavLink>
                        </li>
                        <li
                            className={`subset relative items-start pl-0 transition-colors ${subOpen ? "show" : ""}`}

                            onClick={subsetHandler}
                        >

                            <NavLink className={`flex ${params?.productName ? "active" : ""}`} to={'/products/all'}>

                                <svg class="w-5 h-5 ml-2">
                                    <use href="#shopping-cart"></use>
                                </svg>
                                فروشگاه</NavLink>
                            <svg
                                class="chevron-down w-4 h-4 absolute left-0 rotate-180 top-3 transition-all duration-300"
                            >
                                <use href="#chevron-down"></use>
                            </svg>
                            <div
                                class="relative top-3 overflow-hidden transition-height duration-[350ms] h-0 flex flex-col gap-y-3 px-6 w-52 bg-transparent text-right tracking-normal text-sm font-normal leading-6 text-zinc-700 child:transition-colors child-hover:text-orange-300 dark:text-white"
                            >
                                {
                                    products.map((pro, index) => <NavLink key={index} to={`/Products/${pro.name}`}>{pro.namefa}</NavLink>)
                                }
                            </div>
                        </li>

                        <li>
                            <svg class="w-5 h-5 ml-2">
                                <use href="#document-text"></use>
                            </svg>
                            <NavLink to={"/purchase"}>سوابق خرید</NavLink>
                        </li>
                        <li>
                            <svg class="w-5 h-5 ml-2">
                                <use href="#ticket"></use>
                            </svg>
                            <NavLink to={"/blogs"}>بلاگ</NavLink>
                        </li>

                    </ul>
                    <div
                        class="flex flex-col text-orange-500/95 dark:text-orange-300 child:text-base py-8 px-6 gap-y-2 child:flex child:gap-x-2 child:px-2.5 child:py-2"
                    >
                        <NavLink to={"/loginForm"} className='flex items-center text-xl gap-x-2.5' onClick={goToLoginHandler}>
                            <svg class="w-8 h-8 rotate-180">
                                <use href="#arrow-left-on-rectangle"></use>
                            </svg>
                            {
                                isLogin ? (<span class="inline-block xl:hidden">خروج</span>) : (<span class="inline-block xl:hidden">ورود | ثبت نام</span>)
                            }
                        </NavLink>
                        <a href="#" class="themeToggle" onClick={changeThemeHandler}>
                            <svg class="w-5 h-5 inline-block dark:hidden">
                                <use href="#moon"></use>
                            </svg>
                            <svg class="w-5 h-5 hidden dark:inline-block">
                                <use href="#sun"></use>
                            </svg>
                            <span class="hidden dark:inline-block">تم روشن</span>
                            <span class="inline-block dark:hidden">تم تیره</span>
                        </a>
                        <a href="#" class="shopping-icon-mobile" onClick={basketHandler}>
                            <svg class="w-5 h-5">
                                <use href="#shopping-cart"></use>
                            </svg>
                            سبد خرید
                        </a>
                    </div>
                </div>

                <div class="">
                    <svg class="h-[40px] w-[100px] text-orange-300">
                        <use href="#logo-type"></use>
                    </svg>
                </div>

                <a class="shopping-icon-mobile" onClick={basketHandler}>
                    <svg class="w-8 h-8 text-zinc-700 dark:text-white">
                        <use href="#shopping-cart"></use>
                    </svg>
                </a>

                <div
                    class={`fixed -left-full bottom-0 top-0 flex flex-col justify-between gap-y-5 px-4 py-5 w-64 bg-white shadow-main text-right tracking-normal text-base font-normal leading-6 text-zinc-700 min-h-screen transition-all duration-300 dark:bg-zinc-700 ${contextData.openBasket ? "open" : ""}`}
                    id="mobileUserBasket"
                >
                    <div class="">
                        <div
                            class="flex justify-between font-DanaMedium text-xs tracking-tighter border-b pb-5 border-gray-300 dark:border-white/5"
                        >
                            <div class="" id="closeUserBasket" onClick={basketHandler}>
                                <svg class="h-5 w-5 text-zinc-600 dark:text-white">
                                    <use href="#x-mark"></use>
                                </svg>
                            </div>
                            <span class="text-base font-medium text-zinc-700 dark:text-white"
                            >سبد خرید</span
                            >
                        </div>
                        <div
                            class="flex flex-col gap-y-10 max-h-screen scrollbar-customize overflow-y-scroll pt-5"
                        >
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p2.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >29.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">175,000</span> تومان
                                    </p>
                                </div>
                            </div>
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p3.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >14.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">285,000</span> تومان
                                    </p>
                                </div>
                            </div>
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p2.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >29.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">175,000</span> تومان
                                    </p>
                                </div>
                            </div>
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p3.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >14.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">285,000</span> تومان
                                    </p>
                                </div>
                            </div>
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p2.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >29.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">175,000</span> تومان
                                    </p>
                                </div>
                            </div>
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p3.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >14.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">285,000</span> تومان
                                    </p>
                                </div>
                            </div>
                            <div class="flex pb-5 border-b border-gray-300 dark:border-white/5">
                                <div class="w-[90px] h-[90px]">
                                    <img
                                        class="w-full h-full"
                                        src="./images/products/p2.png"
                                        alt=""
                                    />
                                </div>
                                <div class="w-[130px] flex flex-col font-DanaMedium">
                                    <h4
                                        class="text-zinc-700 text-sm font-medium mb-1.5 line-clamp-2 dark:text-white"
                                    >
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h4>
                                    <span
                                        class="text-teal-600 text-xs font-medium tracking-tighter leading-6 dark:text-emerald-500"
                                    >29.500 تومان تخفیف</span
                                    >
                                    <p class="text-sm text-zinc-700 dark:text-white">
                                        <span class="text-base">175,000</span> تومان
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-end">
                        <a
                            href="#"
                            class="flex items-center justify-center bg-teal-600 text-white text-base text-normal tracking-tightest w-28 h-11 rounded-xl transition-all dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600"
                        >
                            ثبت سفارش
                        </a>
                        <div class="">
                            <span class="text-gray-300 text-xs">مبلغ پرداخت</span>
                            <p class="text-sm text-zinc-700 dark:text-white">
                                <span class="text-base">560,000</span> تومان
                            </p>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
