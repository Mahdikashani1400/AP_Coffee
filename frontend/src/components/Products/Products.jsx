import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products, { getItemLocale, mainHost } from '../../data'
import UseFetch from '../../customHooks/UseFetch'
import { AppContext } from '../../Contexts/AppContext';
import ShowToast from '../../ShowToast';
import useProducts from '../../customHooks/UseProducts';
import UseData from '../../customHooks/UseData';
import UseStorage, { UsePutStorage } from '../../customHooks/UseStorage';

export default function Products() {
    // console.log('x');
    const contextData = useContext(AppContext);
    const token = getItemLocale("token")

    const [productBasketId, setProductBasketId] = useState(null)

    let productsFiltered = []
    const params = useParams()

    const { data: productsInfo, isLoading, error, isError, isFetching, refetch } = useProducts();

    const { data: storage, refetch: refetchStorage } = UseStorage()
    console.log(storage);

    const { mutate: putStorageReq } = UsePutStorage()

    const productTarget = products.find(
        (product) => product.name === params.productName
    );

    function getTopProductsBySales(products) {

        const sortedProducts = products?.sort((a, b) => b.sales - a.sales);
        // Get the top 12 products
        const topProducts = sortedProducts?.slice(0, 12);

        return topProducts;
    }

    function filterProductsHandler() {
        if (!params?.productName) {
            productsFiltered = getTopProductsBySales(productsInfo)
        } else {
            (params.productName === 'all' || !params?.productName) ? productsFiltered = productsInfo : productsFiltered = productsInfo?.filter(product => product.category.name === params.productName)
        }

    }

    filterProductsHandler()



    useEffect(() => {
        // const reqInfo = { pathKey: "storage", method: "GET", token: token, type: null }
        const fetchMental = async () => {
            if (productBasketId) {
                // const [status, result] = await UseFetch(reqInfo)
                const productTargetInfo = [...productsInfo].filter(product => product.id === productBasketId)[0]

                if (storage.sugar >= productTargetInfo.sugar && storage.chocolate >= productTargetInfo.chocolate && storage.coffee >= productTargetInfo.coffee && storage.flour >= productTargetInfo.flour) {
                    // add product to user basket array and fetch for minus storage

                    const reqPutStorage =
                    {
                        sugar: storage.sugar - productTargetInfo.sugar,
                        chocolate: storage.chocolate - productTargetInfo.chocolate,
                        coffee: storage.coffee - productTargetInfo.coffee,
                        flour: storage.flour - productTargetInfo.flour,
                    }
                    console.log(reqPutStorage);
                    putStorageReq(reqPutStorage)


                    contextData.setBasketInfo(prevState => {
                        let hasProduct = false
                        let finalBasketInfo = {}
                        // console.log(productBasketId);
                        const updateProducts = prevState.products.map(product => {
                            if (product.product === productBasketId) {
                                hasProduct = true
                                return {
                                    product: productBasketId,
                                    quantity: +product.quantity + 1
                                }
                            }
                            return product
                        })

                        if (hasProduct) {
                            finalBasketInfo = {
                                products: updateProducts,
                                totalPrice: +prevState.totalPrice + productTargetInfo.price
                            }


                        } else {
                            finalBasketInfo = {
                                products: [...updateProducts, {
                                    product: productBasketId,
                                    quantity: 1
                                }],
                                totalPrice: +prevState.totalPrice + productTargetInfo.price
                            }
                        }
                        localStorage.setItem('user-basket', JSON.stringify(finalBasketInfo))
                        return finalBasketInfo
                    })

                    refetchStorage()
                    setProductBasketId(prevState => null)
                    ShowToast("محصول مورد نظر با موفقیت به سبد خرید اضافه شد", "success")


                } else {
                    ShowToast(`موجودی محصول ${productTargetInfo.name} به اتمام رسیده است.`, 'error')
                    setProductBasketId(prevState => null)

                }
            }
        }
        fetchMental()
    }, [productBasketId])
    const addToBasketHandler = (productId) => {
        if (getItemLocale("token")) {
            setProductBasketId(prevState => productId)
        } else {
            ShowToast("جهت خرید محصول باید ابتدا وارد حساب کاربری خود شوید!", "error")
        }
    }
    return (

        <section class="relative product">

            <div
                class="h-[818px] absolute w-full bg-products bg-cover bg-no-repeat bg-[#d3d3d300]"
            ></div>
            <div class="thing absolute md:flex hidden justify-center -top-[15px] w-full">
                <div
                    class="w-[30px] h-[30px] border-2 border-orange-300 rounded-full"
                ></div>
            </div>
            <div class="container lg:pt-48 pt-8">
                <div class="flex flex-col">
                    <div class="title">

                        {
                            productTarget ? <h3 class="">{
                                productTarget.namefa}</h3> : <h3 class="">محصولات پر فروش</h3>
                        }

                    </div>
                    <div className={`products__container ${productsFiltered?.length ? "" : "grid-cols-1"}`}>
                        {

                            isLoading ? <div className="text-center text-white bg-black-dark  dark:bg-yellow-500 text-3xl p-14 rounded-xl font-bold">در حال پردازش ...</div> :

                                productsFiltered.length ?
                                    productsFiltered.map(product => {
                                        return (
                                            <div key={product.id} class="product__box">
                                                <div class="product__box-content">
                                                    <div class="product__discount">
                                                        <span class="">12%</span>
                                                    </div>
                                                    <div class="product__img">
                                                        <img className='h-[inherit]' src={`${mainHost}/media/product_images/${product.image.split("product_images/")[1]}`} alt="" />
                                                    </div>
                                                    <div class="">
                                                        <p class="product__name">
                                                            {product.name}
                                                        </p>
                                                        <div class="product__price-info">
                                                            <p class="product__price">
                                                                <span class="product__price-number">{product.price}</span>
                                                                تومان
                                                            </p>
                                                            {/* <p class="product__price--del">175,000 تومان</p> */}
                                                        </div>
                                                    </div>
                                                    <div class="product__nav">
                                                        <div class="product__buy cursor-pointer">
                                                            <div class="add_to_basket" onClick={() => {
                                                                addToBasketHandler(product.id)
                                                            }}>
                                                                <svg class="">
                                                                    <use href="#shopping-cart"></use>
                                                                </svg>
                                                            </div>
                                                            <svg class="product__arrow">
                                                                <use href="#arrows-right-left"></use>
                                                            </svg>
                                                        </div>
                                                        <div class="product__stars cursor-pointer" >
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })
                                    : <div className="text-center text-white bg-black-dark  dark:bg-pink-500 text-3xl p-14 rounded-xl font-bold">محصول مورد نظر یافت نشد...</div>

                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
