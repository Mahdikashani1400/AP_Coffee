import React from 'react'

export default function ContactUs() {
    return (
        <section class="contact__us lg:my-28 sm:my-12 my-8">
            <div class="container">
                <div
                    class="flex flex-col lg:flex-row lg:gap-x-5 items-center lg:gap-y-0 gap-y-8"
                >
                    <div class="xs:w-[296px] w-64 lg:w-fit">
                        <img class="" src="./images/contact.png" alt="" />
                    </div>
                    <div class="w-fit flex flex-col gap-y-5 lg:gap-y-0">
                        <div class="title">
                            <h3>یکی از بهترین قهوه ها !</h3>
                            <div class="title__guide">
                                <h6>کیفیت قهوه را از ما بخواهید ...</h6>
                            </div>
                        </div>
                        <div
                            class="lg:my-6 flex gap-x-2.5 child:w-1 child:h-1 child:bg-gray-400 child:rounded-full"
                        >
                            <span></span><span></span><span></span>
                        </div>
                        <p
                            class="dark:text-white text-zinc-700 lg:text-2xl text-lg font-normal text-justify lg:leading-8 leading-7"
                        >
                            فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه
                            معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ
                            همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد
                            ما روز شما را می سازد!
                        </p>
                        <a
                            href="#"
                            class="lg:mt-6 lg:w-[216px] w-[180px] lg:h-[60px] h-[50px] p-[14px] flex items-center justify-center rounded-full border-2 border-orange-300 text-orange-300 lg:text-xl text-base font-normal lg:tracking-tightest tracking-tight"
                        >
                            <svg class="pl-2 w-8 h-8">
                                <use href="#phone"></use>
                            </svg>
                            ثبت سفارش تلفنی
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
