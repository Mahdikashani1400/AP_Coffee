import React, { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext';
export default function Navbar() {
    const contextData = useContext(AppContext);
    const changeThemeHandler = () => {
        contextData.setDarkTheme(prevState => !prevState)
    }
    return (
        <>
            <header
                class="fixed top-9 right-0 left-0 w-[96%] lg:w-[90%] h-24 mx-auto bg-black/50 rounded-3xl hidden md:flex justify-between items-center px-10 py-5 tracking-tightest backdrop-blur-[6px] z-50"
            >
                <nav class="flex items-center gap-x-7 lg:gap-x-9 h-14">
                    <div class=""><img src="./images/app-logo.png" alt="" /></div>
                    <ul
                        class="flex gap-x-6 lg:gap-x-9 text-xl text-gray-300 h-full items-center child:py-3.5"
                    >
                        <li class="text-orange-200 font-DanaMedium">
                            <a href="#">صفحه اصلی</a>
                        </li>
                        <li class="relative transition-colors group hover:text-orange-300">
                            <a href="#">فروشگاه</a>
                            <div
                                class="absolute top-full transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-75 flex flex-col gap-y-4 p-6 w-52 h-[272px] bg-white shadow-main border-t-[3px] border-[#FAB873] rounded-2xl text-right tracking-normal text-base font-normal leading-6 text-zinc-700 child:transition-colors child-hover:text-orange-300 dark:bg-zinc-700 dark:text-white"
                            >
                                <a href="#">قهوه ویژه</a>
                                <a href="#">ویژه در سطح جهانی</a>
                                <a href="#">قهوه درجه یک</a>
                                <a href="#">ترکیبات تجاری</a>
                                <a href="#">کپسول قهوه</a>
                                <a href="#">قهوه زینو برزیلی</a>
                            </div>
                        </li>
                        <li><a href="#">دیکشنری</a></li>
                        <li><a href="#">بلاگ</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس با ما</a></li>
                    </ul>
                </nav>
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
                                    <span class="text-gray-300">2 مورد</span>
                                    <a
                                        href="#"
                                        class="text-orange-300 flex items-center font-medium"
                                    >مشاهده سبد خرید
                                        <svg class="w-4 h-4 font-medium shrink-0">
                                            <use href="#chevron-left"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    class="flex flex-col gap-y-10 overflow-y-scroll max-h-[450px] scrollbar-customize"
                                >
                                    <div
                                        class="flex gap-x-2.5 pb-5 border-b border-gray-300 dark:border-white/5"
                                    >
                                        <div class="w-[120px] h-[120px]">
                                            <img
                                                class="w-full h-full"
                                                src="./images/products/p2.png"
                                                alt=""
                                            />
                                        </div>
                                        <div class="w-[230px] flex flex-col font-DanaMedium">
                                            <h4
                                                class="text-zinc-700 text-base font-medium mb-5 line-clamp-2 dark:text-white"
                                            >
                                                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                            </h4>
                                            <span
                                                class="text-teal-600 text-xs font-semibold tracking-tighter leading-6 dark:text-emerald-500"
                                            >29.500 تومان تخفیف</span
                                            >
                                            <p class="text-sm text-zinc-700 dark:text-white">
                                                <span class="text-xl font-semibold">175,000</span> تومان
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-x-2.5 pb-5 border-b border-gray-300 dark:border-white/5"
                                    >
                                        <div class="w-[120px] h-[120px]">
                                            <img
                                                class="w-full h-full"
                                                src="./images/products/p3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div class="w-[230px] flex flex-col font-DanaMedium">
                                            <h4
                                                class="text-zinc-700 text-base font-medium mb-5 line-clamp-2 dark:text-white"
                                            >
                                                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                            </h4>
                                            <span
                                                class="text-teal-600 text-xs font-semibold tracking-tighter leading-6 dark:text-emerald-500"
                                            >14.500 تومان تخفیف</span
                                            >
                                            <p class="text-sm text-zinc-700 dark:text-white">
                                                <span class="text-xl font-semibold">285,000</span> تومان
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-x-2.5 pb-5 border-b border-gray-300 dark:border-white/5"
                                    >
                                        <div class="w-[120px] h-[120px]">
                                            <img
                                                class="w-full h-full"
                                                src="./images/products/p2.png"
                                                alt=""
                                            />
                                        </div>
                                        <div class="w-[230px] flex flex-col font-DanaMedium">
                                            <h4
                                                class="text-zinc-700 text-base font-medium mb-5 line-clamp-2 dark:text-white"
                                            >
                                                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                            </h4>
                                            <span
                                                class="text-teal-600 text-xs font-semibold tracking-tighter leading-6 dark:text-emerald-500"
                                            >29.500 تومان تخفیف</span
                                            >
                                            <p class="text-sm text-zinc-700 dark:text-white">
                                                <span class="text-xl font-semibold">175,000</span> تومان
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="pt-1">
                                        <span class="text-gray-300">مبلغ پرداخت</span>
                                        <p class="text-sm text-zinc-700 dark:text-white">
                                            <span class="text-xl font-semibold">560,000</span> تومان
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        class="flex items-center justify-center bg-teal-600 text-white text-xl text-normal tracking-tightest w-36 rounded-xl transition-all dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600"
                                    >
                                        ثبت سفارش
                                    </a>
                                </div>
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
                    <a href="#" class="flex items-center text-xl gap-x-2.5">
                        <svg class="w-8 h-8 rotate-180">
                            <use href="#arrow-left-on-rectangle"></use>
                        </svg>
                        <span class="hidden xl:inline-block">ورود | ثبت نام</span>
                    </a>
                </div>
            </header>
        </>
    )
}
