import React from 'react'

export default function ProductBrand() {
    return (
        <section class="product__brand xl:py-20 md:py-12 pt-8 pb-10">
            <div class="container">
                <div
                    class="flex flex-col items-center gap-5 md:flex-row md:justify-between"
                >
                    <div class="relative flex items-center">
                        <a href="#" class="">
                            <img
                                src="./images/categories/category-right.jpg"
                                alt=""
                                class="rounded-2xl"
                            />
                        </a>
                        <div class="absolute right-12">
                            <h3 class="text-white text-2xl md:text-4xl font-semibold">
                                انواع قهوه
                            </h3>
                            <h6 class="text-white pt-7 text-base md:text-xl font-normal">
                                ترکیبی و تک خاستگاه
                            </h6>
                        </div>
                    </div>
                    <div class="relative flex items-center">
                        <a href="#" class="">
                            <img
                                src="./images/categories/category-left.jpg"
                                alt=""
                                class="rounded-2xl"
                            />
                        </a>
                        <div class="absolute right-12">
                            <h3 class="text-white text-2xl md:text-4xl font-semibold">
                                پودر های فوری
                            </h3>
                            <h6 class="text-white pt-7 text-base md:text-xl font-normal">
                                نسکافه ، هات چاکلت ، ماسالا
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
