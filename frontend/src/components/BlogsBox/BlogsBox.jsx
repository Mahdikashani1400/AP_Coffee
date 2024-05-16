import React from 'react'

export default function BlogsBox() {
    return (
        <section class="blogs">
            <div class="container">
                <div class="flex flex-col lg:gap-y-12 gap-y-5">
                    <div class="title flex justify-between items-baseline">
                        <h3>مطالب خواندنی</h3>
                        <a class="see__all hidden lg:flex" href="#">
                            مشاهده همه مطالب
                            <svg class="">
                                <use href="#chevron-left"></use>
                            </svg>
                        </a>
                        <a class="see__all lg:hidden flex" href="#">
                            مشاهده همه
                            <svg class="">
                                <use href="#chevron-left"></use>
                            </svg>
                        </a>
                    </div>
                    <div
                        class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
                    >
                        <div class="blog__box">
                            <div class="blog__img">
                                <img class="" src="./images/blogs/blog-1.png" alt="" />
                            </div>
                            <div class="blog__info">
                                <p class="blog__title">طرز تهیه قهوه دمی با دستگاه اروپرس</p>
                                <div class="blog__nav">
                                    <div class="blog__date">
                                        <span class="blog__day">21</span>
                                        <span class="blog__date-m-y">مرداد</span>
                                        <span class="blog__date-m-y">1402</span>
                                    </div>
                                    <a href="#" class="blog__btn"
                                    ><span class=""> مطالعه </span>
                                        <svg class="">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="blog__box">
                            <div class="blog__img">
                                <img class="" src="./images/blogs/blog-2.png" alt="" />
                            </div>
                            <div class="blog__info">
                                <p class="blog__title">طرز تهیه قهوه دمی با دستگاه اروپرس</p>
                                <div class="blog__nav">
                                    <div class="blog__date">
                                        <span class="blog__day">21</span>
                                        <span class="blog__date-m-y">مرداد</span>
                                        <span class="blog__date-m-y">1402</span>
                                    </div>
                                    <a href="#" class="blog__btn"
                                    ><span class=""> مطالعه </span>
                                        <svg class="">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="blog__box">
                            <div class="blog__img">
                                <img class="" src="./images/blogs/blog-3.png" alt="" />
                            </div>
                            <div class="blog__info">
                                <p class="blog__title">طرز تهیه قهوه دمی با دستگاه اروپرس</p>
                                <div class="blog__nav">
                                    <div class="blog__date">
                                        <span class="blog__day">21</span>
                                        <span class="blog__date-m-y">مرداد</span>
                                        <span class="blog__date-m-y">1402</span>
                                    </div>
                                    <a href="#" class="blog__btn"
                                    ><span class=""> مطالعه </span>
                                        <svg class="">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="blog__box">
                            <div class="blog__img">
                                <img class="" src="./images/blogs/blog-4.png" alt="" />
                            </div>
                            <div class="blog__info">
                                <p class="blog__title">
                                    طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی
                                </p>
                                <div class="blog__nav">
                                    <div class="blog__date">
                                        <span class="blog__day">21</span>
                                        <span class="blog__date-m-y">مرداد</span>
                                        <span class="blog__date-m-y">1402</span>
                                    </div>
                                    <a href="#" class="blog__btn"
                                    ><span class=""> مطالعه </span>
                                        <svg class="">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
