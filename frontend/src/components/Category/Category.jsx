import React from 'react'

export default function Category() {
    return (
        <section class="product__category pb-20">
            <div class="container">
                <div
                    class="flex flex-wrap justify-center md:gap-x-16 gap-x-7 gap-y-6 child:w-25 child:lg:w-36 child:xl:w-50"
                >
                    <div class="flex flex-col">
                        <a href="#">
                            <img src="./images/categories/category1.png" alt="" />
                        </a>
                        <span
                            class="text-zinc-700 dark:text-white text-sm md:leading-7 text-center font-semibold"
                        >قهوه دمی و اسپرسو</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <a href="#">
                            <img src="./images/categories/category2.png" alt="" />
                        </a>
                        <span
                            class="text-zinc-700 dark:text-white text-sm md:leading-7 text-center font-semibold"
                        >لوازم جانبی و تجهیزات</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <a href="#">
                            <img src="./images/categories/category3.png" alt="" />
                        </a>
                        <span
                            class="text-zinc-700 dark:text-white text-sm md:leading-7 text-center font-semibold"
                        >اسپرسو ساز</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <a href="#">
                            <img src="./images/categories/category4.png" alt="" />
                        </a>
                        <span
                            class="text-zinc-700 dark:text-white text-sm md:leading-7 text-center font-semibold"
                        >پک تستر قهوه</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <a href="#">
                            <img src="./images/categories/category5.png" alt="" />
                        </a>
                        <span
                            class="text-zinc-700 dark:text-white text-sm md:leading-7 text-center font-semibold"
                        >قهوه ترک</span
                        >
                    </div>
                </div>
            </div>
        </section>
    )
}
