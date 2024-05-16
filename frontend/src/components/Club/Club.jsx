import React from 'react'

export default function Club() {
    return (
        <section class="club lg:my-20 my-8">
            <div class="container">
                <div
                    class="flex flex-wrap gap-x-3 xl:gap-x-0 gap-y-9 justify-center lg:justify-between sm:justify-between md:justify-center items-center bg-club xl:px-11 lg:px-5 px-3 py-6 shadow-main rounded-2xl"
                >
                    <div class="flex">
                        <div class="">
                            <img src="./images/club/diamond.png" alt="" />
                        </div>
                        <div
                            class="pr-6 text-white font-MorabbaLight child:lg:leading-[48px] child:leading-7"
                        >
                            <h2 class="xl:text-5xl lg:text-4xl text-2xl font-bold">
                                کافی کلاب
                            </h2>
                            <p class="font-light xl:text-2xl lg:text-xl text-lg">
                                میدونستی میتونی با امتیاز هات قهوه بگیری ؟
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex gap-x-5 child:lg:w-[98px] child:w-[72px] child:lg:h-[98px] child:h-[72px] child:flex child:flex-col child:lg:gap-y-2.5 child:gap-y-1 child:items-center child:justify-center child:rounded-2xl child:bg-white child:text-emerald-600 child:lg:text-sm child:text-xs child:font-normal"
                    >
                        <div class="">
                            <div class="lg:w-fit lg:h-fit w-10 h-10">
                                <img src="./images/club/Discovery.svg" alt="" />
                            </div>
                            <span>چرخ و بخت</span>
                        </div>
                        <div class="">
                            <div class="lg:w-fit lg:h-fit w-10 h-10">
                                <img src="./images/club/Activity.svg" alt="" />
                            </div>
                            <span>ماموریت ها</span>
                        </div>
                        <div class="">
                            <div class="lg:w-fit lg:h-fit w-10 h-10">
                                <img src="./images/club/Ticket-Star.svg" alt="" />
                            </div>
                            <span>جایزه ها</span>
                        </div>
                    </div>
                    <div class="text-white text-right md:text-center lg:text-right">
                        <h6 class="text-3xl font-semibold">542</h6>
                        <span class="text-sm font-normal">امتیـــــــاز شما</span>
                        <a
                            href="#"
                            class="mt-2 text-sm font-medium bg-club-btn flex justify-center items-center h-8 w-[110px] rounded-full"
                        >
                            دریافت جایزه
                            <svg class="w-5 h-5 font-medium shrink-0 stroke-1">
                                <use href="#chevron-left"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
