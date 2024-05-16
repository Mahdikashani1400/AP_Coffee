import React from 'react'

export default function Footer() {
    return (
        <footer
            class="bg-zinc-700 w-full pt-[62px] pb-12 text-gray-300 lg:text-xl text-base font-normal"
        >
            <div class="footer__container">
                <div class="footer__info">
                    <div class="">
                        <div
                            class="flex gap-x-4 text-gray-300 text-xl font-normal leading-8 mb-[18px]"
                        >
                            <svg class="h-[54px] w-[57px]">
                                <use href="#logo"></use>
                            </svg>
                            <svg class="h-[54px] w-[138px]">
                                <use href="#logo-type"></use>
                            </svg>
                        </div>
                        <p class="max-w-[606px] lg:leading-[48px] leading-7 text-lg ml-6">
                            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
                            خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
                            فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
                            منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
                            اشتیاق می‌کوشیم.
                        </p>
                    </div>
                    <div class="mt-7 nav__container">
                        <h5 class="pb-7 text-2xl leading-7 font-semibold">دسترسی سریع</h5>
                        <nav class="footer__nav">
                            <ul class="flex flex-col gap-y-5">
                                <a href="#">حریم خصوصی</a
                                ><a href="#">عودت کالا</a
                                ><a href="#">شرایط استفاده</a
                                ><a href="#">ثبت سفارش</a>
                            </ul>
                            <ul class="flex flex-col gap-y-5">
                                <a href="#">پرسش های متداول</a
                                ><a href="#">فرصت های شغلی</a
                                ><a href="#">ضمانت نامه ها</a
                                ><a href="#">ارتباط با ما</a>
                            </ul>
                            <div class=""></div>
                        </nav>
                    </div>
                    <div class="mt-7">
                        <h5 class="pb-7 text-2xl leading-7 font-semibold">در تماس باشیم</h5>
                        <p class="flex items-center lg:mb-5 mb-4">
                            <svg class="w-6 h-6 text-white ml-3">
                                <use href="#map-pin"></use>
                            </svg>
                            <span
                            >بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</span
                            >
                        </p>
                        <div class="flex mb-10 flex-col lg:flex-row gap-y-4">
                            <p class="flex items-center text-orange-300 ml-5">
                                <svg class="w-6 h-6 ml-3">
                                    <use href="#envelope"></use>
                                </svg>
                                <span>info@Coffee.com</span>
                            </p>
                            <div class="flex">
                                <p class="flex ml-6">
                                    <svg class="ml-3 w-6 h-6">
                                        <use href="#phone"></use>
                                    </svg>
                                    <span>0902 123 6628</span>
                                </p>
                                <p>021 - 6789012</p>
                            </div>
                        </div>
                        <div class="flex lg:gap-x-6 gap-x-1.5">
                            <a
                                href="#"
                                class="footer__social-btn instagram text-orange-200 transition-all relative duration-300"
                            >
                                <svg class="w-[26px] lg:w-[38px] h-[26px] lg:h-[38px]">
                                    <use href="#instagram"></use>
                                </svg>
                                <span>@golden_coffee</span>
                            </a>
                            <a href="#" class="footer__social-btn telegram text-zinc-700">
                                <svg class="lg:w-[38px] lg:h-[38px] w-[26px] h-[26px]">
                                    <use href="#telegram"></use>
                                </svg>
                                <span>@golden_coffee</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
