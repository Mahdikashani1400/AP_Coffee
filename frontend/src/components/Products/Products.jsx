import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products, { getItemLocale } from '../../data'
import UseFetch from '../../customHooks/UseFetch'
import { AppContext } from '../../Contexts/AppContext';
import ShowToast from '../../ShowToast';

export default function Products() {
    const contextData = useContext(AppContext);

    const [productBasketId, setProductBasketId] = useState(null)

    let productsFiltered = []
    const params = useParams()
    const productTarget = products.find(
        (product) => product.name === params.productName
    );

    function filterProductsHandler() {
        (params.productName === 'all' || !params?.productName) ? productsFiltered = contextData.productsInfo : productsFiltered = contextData.productsInfo.filter(product => product.category.name === params.productName)
        console.log(productsFiltered);
    }
    const token = getItemLocale("token")
    // useEffect(() => {
    //     const reqInfo = { pathKey: "products", method: "GET", token: token, type: null }

    //     const fetchData = async () => {

    //         const [status, result] = await UseFetch(reqInfo)
    //         filterProductsHandler()
    //         contextData.setProductsInfo(result)

    //     }
    //     fetchData()
    // }, [])
    filterProductsHandler()


    // console.log(contextData.basketInfo);
    useEffect(() => {
        const reqInfo = { pathKey: "storage", method: "GET", token: token, type: null }
        const fetchMental = async () => {
            const [status, result] = await UseFetch(reqInfo)
            console.log(productBasketId);
            if (productBasketId) {
                const productTargetInfo = contextData.productsInfo.filter(product => product.id === productBasketId)[0]
                console.log(productTargetInfo);
                // console.log(result.sugar);
                if (result.sugar >= productTargetInfo.sugar && result.chocolate >= productTargetInfo.chocolate && result.coffee >= productTargetInfo.coffee && result.flour >= productTargetInfo.flour) {
                    // add product to user basket array and fetch for minus storage

                    const reqPutStorage = {
                        pathKey: "storage", method: "PUT", token: token, type: "json",
                        data: {
                            sugar: result.sugar - productTargetInfo.sugar,
                            chocolate: result.chocolate - productTargetInfo.chocolate,
                            coffee: result.coffee - productTargetInfo.coffee,
                            flour: result.flour - productTargetInfo.flour,
                        }
                    }

                    const [statusStorage, resultStorage] = await UseFetch(reqPutStorage)


                    contextData.setBasketInfo(prevState => {
                        let hasProduct = false
                        let finalBasketInfo = {}
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
                    localStorage.setItem('user-basket', JSON.stringify(contextData.basketInfo))
                    setProductBasketId(prevState => null)


                } else {
                    ShowToast(`موجودی محصول ${productTargetInfo.name} به اتمام رسیده است.`, 'error')
                    setProductBasketId(prevState => null)

                }
            }
        }
        fetchMental()
    }, [productBasketId])
    const addToBasketHandler = (productId) => {
        if (getItemLocale("token") !== "undefined") {
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
                    <div className={`products__container ${productsFiltered.length ? "" : "grid-cols-1"}`}>
                        {
                            productsFiltered.length ?
                                productsFiltered.map(product => {
                                    return (
                                        <div class="product__box">
                                            <div class="product__box-content">
                                                <div class="product__discount">
                                                    <span class="">12%</span>
                                                </div>
                                                <div class="product__img">
                                                    <img className='h-[inherit]' src={`http://localhost:8000/inventory/media/product_images/${product.image.split("product_images/")[1]}`} alt="" />
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
                                                    <Link class="product__buy">
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
                                                    </Link>
                                                    <Link class="product__stars" >
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
                                                    </Link>
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
