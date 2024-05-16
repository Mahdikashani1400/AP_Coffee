import React from 'react'

export default function Products() {
    return (
        <section class="relative product">
            <div
                class="h-[818px] absolute w-full bg-products bg-cover bg-no-repeat bg-[#d3d3d300]"
            ></div>
            <div class="absolute md:flex hidden justify-center -top-[15px] w-full">
                <div
                    class="w-[30px] h-[30px] border-2 border-orange-300 rounded-full"
                ></div>
            </div>
            <div class="container lg:pt-48 pt-8">
                <div class="flex flex-col">
                    <div class="title">
                        <h3 class="">جدیدترین محصولات</h3>
                        <div class="title__guide">
                            <h6 class="">فرآوری شده از دانه قهوه</h6>
                            <a class="see__all hidden lg:flex" href="#">
                                مشاهده همه محصولات
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
                    </div>
                    <div class="products__container">
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p2.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="product__price">
                                            <span class="product__price-number">175,000</span>
                                            تومان
                                        </p>
                                        <p class="product__price--del">175,000 تومان</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p3.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="no__product">فعلا موجود نیست</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p4.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="product__price">
                                            <span class="product__price-number">175,000</span>
                                            تومان
                                        </p>
                                        <p class="product__price--del">175,000 تومان</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p2.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="product__price">
                                            <span class="product__price-number">175,000</span>
                                            تومان
                                        </p>
                                        <p class="product__price--del">175,000 تومان</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p1.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="product__price">
                                            <span class="product__price-number">175,000</span>
                                            تومان
                                        </p>
                                        <p class="product__price--del">175,000 تومان</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p4.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="product__price">
                                            <span class="product__price-number">175,000</span>
                                            تومان
                                        </p>
                                        <p class="product__price--del">175,000 تومان</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="product__box">
                            <div class="product__box-content">
                                <div class="product__discount">
                                    <span class="">12%</span>
                                </div>
                                <div class="product__img">
                                    <img src="./images/products/p3.png" alt="" />
                                </div>
                                <div class="">
                                    <p class="product__name">
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </p>
                                    <div class="product__price-info">
                                        <p class="product__price">
                                            <span class="product__price-number">175,000</span>
                                            تومان
                                        </p>
                                        <p class="product__price--del">175,000 تومان</p>
                                    </div>
                                </div>
                                <div class="product__nav">
                                    <a href="#" class="product__buy">
                                        <span class="">
                                            <svg class="">
                                                <use href="#shopping-cart"></use>
                                            </svg>
                                        </span>
                                        <svg class="product__arrow">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </a>
                                    <a class="product__stars" href="#">
                                        <svg class="">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
                                        </svg>
                                        <svg class="active">
                                            <use href="#star"></use>
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
