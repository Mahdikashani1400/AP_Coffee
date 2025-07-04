import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Contexts/AppContext';
import { Link, NavLink, useParams } from 'react-router-dom';
import products, { getItemLocale } from '../../data';
import UseFetch from '../../customHooks/UseFetch';
import ShowToast from '../../ShowToast';
import useProducts from '../../customHooks/UseProducts';
import UseOrders, { UsePostOrders } from '../../customHooks/UseOrders';

export default function Navbar() {
    const params = useParams()
    const contextData = useContext(AppContext);
    const { data: productsInfo, isLoading, error, isError, isFetching, refetch } = useProducts();
    const { mutate: addOrders } = UsePostOrders();


    const [orderFlag, setOrderFlag] = useState(false)
    const changeThemeHandler = () => {
        contextData.setDarkTheme(prevState => {
            localStorage.setItem('theme', JSON.stringify(!prevState))
            return !prevState
        }
        )
    }

    const isLogin = contextData.userInfo

    const goToLoginHandler = () => {
        if (isLogin) {
            contextData.setUserInfo(null)
            localStorage.setItem('token', "")
            localStorage.setItem('user-info', null)
        }
    }

    const orderHandler = () => {
        setOrderFlag(prevState => !prevState)

    }
    useEffect(() => {

        if (orderFlag) {
            const fetchOrder = async () => {
                const reqInfo = {
                    products: contextData.basketInfo['products']
                }

                // const [status, result] = await UseFetch(reqInfo)

                addOrders(reqInfo)

            }
            fetchOrder()
            contextData.setBasketInfo(
                {
                    products: [],
                    totalPrice: 0
                }
            )
            localStorage.setItem('user-basket', JSON.stringify({
                products: [],
                totalPrice: 0
            }))
            ShowToast("سفارش شما با موفقیت ثبت شد", "success")
            setOrderFlag(prevState => !prevState)

        }

    }, [orderFlag])
    return (
        <>
            <header
                class="fixed top-9 right-0 left-0 w-[96%] lg:w-[90%] h-24 mx-auto bg-black/50 rounded-3xl hidden md:flex justify-between items-center px-10 py-5 tracking-tightest backdrop-blur-[6px] backdrop-brightness-[.4] z-50"
            >
                <nav class="nav_items">
                    <div class=""><img src="./images/app-logo.png" alt="" /></div>
                    <ul
                        class="flex gap-x-6 lg:gap-x-9 text-xl text-gray-300 h-full items-center child:py-3.5"
                    >
                        <li class="hover:text-orange-300 font-DanaMedium">
                            <NavLink to={"/"}>صفحه اصلی</NavLink>
                        </li>

                        <li class="relative hover:text-orange-300 transition-colors group ">
                            <NavLink className={params?.productName ? "active" : ""} to={'/products/all'}>فروشگاه</NavLink>
                            <div
                                class="absolute top-full transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-75 flex flex-col gap-y-4 p-6 w-52 h-[190px] bg-white shadow-main border-t-[3px] border-[#FAB873] rounded-2xl text-right tracking-normal text-base font-normal leading-6 text-zinc-700 child:transition-colors child-hover:text-orange-300 dark:bg-zinc-700 dark:text-white"
                            >
                                {
                                    products.map((pro, index) => <NavLink key={index} to={`/Products/${pro.name}`}>{pro.namefa}</NavLink>)
                                }
                            </div>
                        </li>
                        <li className='hover:text-orange-300 transition-all'>{isLogin ? <NavLink to={"/purchase"}>سوابق خرید</NavLink> : <Link onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            ShowToast("برای دیدن سوابق خرید، باید ابتدا وارد حساب کاربری خود شوید.", 'error')
                        }}>سوابق خرید</Link>}</li>
                        <li className='hover:text-orange-300 transition-all'><NavLink to={"/blogs"}>بلاگ</NavLink></li>

                    </ul>
                </nav>
                {
                    isLogin ?
                        <>
                            <div className="flex items-center text-xl gap-x-5"><p className="text-[#d7df77] text-xl">{contextData.userInfo.full_name}</p>
                                <p className='text-zinc-300 dark:text-white hidden xl:block'>عزیز ، خوش آمدی</p></div>
                        </>
                        : ""
                }
                <div class="flex items-center text-orange-200 gap-x-5 xl:gap-x-10">
                    <div class="flex gap-x-5 items-center">
                        <div class="py-3 relative group">
                            <div class="cursor-pointer">
                                <svg class="w-8 h-8">
                                    <use href="#shopping-cart"></use>
                                </svg>
                            </div>
                            <div
                                class="absolute invisible opacity-0 top-full -left-full lg:left-0 flex flex-col gap-y-5 transition-all group-hover:opacity-100 group-hover:visible delay-75 px-3 py-5 w-[350px] lg:p-5 lg:w-[400px] bg-white shadow-main border-t-[3px] border-[#FAB873] rounded-2xl text-right tracking-normal text-base font-normal leading-6 text-zinc-700 dark:bg-zinc-700"
                            >
                                <div
                                    class="flex justify-between font-DanaMedium text-xs tracking-tighter"
                                >
                                    <span class="text-gray-300">{contextData.basketInfo['products'].length} محصول</span>
                                    <div

                                        class="text-orange-300 flex items-center font-medium cursor-pointer"
                                    >مشاهده سبد خرید
                                        <svg class="w-4 h-4 font-medium shrink-0">
                                            <use href="#chevron-left"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="flex flex-col gap-y-10 overflow-y-scroll max-h-[450px] scrollbar-customize"
                                >

                                    {
                                        contextData.basketInfo['products'].map(product => {
                                            const productTarget = productsInfo?.find(productInfo => productInfo.id === product.product)

                                            if (productTarget) {
                                                return (
                                                    <div
                                                        class="flex gap-x-2.5 pb-5 border-b border-gray-300 dark:border-white/5"
                                                    >
                                                        <div class="w-[120px] h-[120px]">
                                                            <img
                                                                class="w-full h-full"
                                                                src={`https://coffee-shop-django.liara.run/inventory/media/product_images/${productTarget.image.split("product_images/")[1]}`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="w-[230px] flex flex-col font-DanaMedium">
                                                            <h4
                                                                class="text-zinc-700 text-base font-medium mb-5 line-clamp-2 dark:text-white"
                                                            >
                                                                {productTarget.name}
                                                            </h4>
                                                            <span
                                                                class="text-teal-600 text-xs font-semibold tracking-tighter leading-6 dark:text-emerald-500"
                                                            >29.500 تومان تخفیف</span
                                                            >
                                                            <p class="text-sm text-zinc-700 dark:text-white">
                                                                <span class="text-xl font-semibold">{productTarget.price}</span> تومان
                                                            </p>
                                                            <p className='text-white self-center'>{product.quantity} عدد</p>

                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                </div>
                                {
                                    contextData.basketInfo['products'].length ? (
                                        <div class="flex justify-between">
                                            <div class="pt-1">
                                                <span class="text-gray-300">مبلغ پرداخت</span>
                                                <p class="text-sm text-zinc-700 dark:text-white">
                                                    <span class="text-xl font-semibold">{contextData.basketInfo['totalPrice']}</span> تومان
                                                </p>
                                            </div>
                                            <div
                                                onClick={orderHandler}
                                                class="flex items-center justify-center bg-teal-600 text-white text-xl text-normal tracking-tightest w-36 rounded-xl transition-all dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600
                                                cursor-pointer"
                                            >
                                                ثبت سفارش
                                            </div>
                                        </div>
                                    ) : (<div className='text-white font-semibold text-lg text-center'>سبد خرید خالی میباشد !</div>)
                                }
                            </div>
                        </div>
                        <div class="themeToggle" onClick={changeThemeHandler}>
                            <svg class="w-8 h-8 cursor-pointer inline-block dark:hidden">
                                <use href="#moon"></use>
                            </svg>
                            <svg class="w-8 h-8 cursor-pointer hidden dark:inline-block">
                                <use href="#sun"></use>
                            </svg>
                        </div>
                    </div>
                    <span class="border-white/20 border-l h-14"></span>

                    <Link to={"/loginForm"} className='flex items-center text-xl gap-x-2.5' onClick={goToLoginHandler}>
                        <svg class="w-8 h-8 rotate-180">
                            <use href="#arrow-left-on-rectangle"></use>
                        </svg>
                        {
                            isLogin ? (<span class="hidden xl:inline-block">خروج</span>) : (<span class="hidden xl:inline-block">ورود | ثبت نام</span>)
                        }
                    </Link>


                </div>
            </header >
        </>
    )
}
