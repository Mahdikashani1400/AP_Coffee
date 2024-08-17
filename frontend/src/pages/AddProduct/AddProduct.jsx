
import React, { useContext, useEffect, useState } from 'react'
import SidebarC from '../../components/CMS/SidebarC/SidebarC'
import NavbarC from '../../components/CMS/NavbarC/NavbarC'
import { getItemLocale } from '../../data';
import UseFetch from '../../customHooks/UseFetch';
import ShowToast from '../../ShowToast';
import TableTemplate from '../../components/CMS/TableTemplate/TableTemplate';
import { AppContext } from '../../Contexts/AppContext';
import useProducts, { UseDeleteProduct, UsePostProduct } from '../../customHooks/UseProducts';
import { QueryClient, useMutation } from 'react-query';
import UseData from '../../customHooks/UseData';

import UseCat from '../../customHooks/UseCat';

export default function AddProduct() {
    const token = getItemLocale("token")
    // const contextData = useContext(AppContext);


    const [mental, setMental] = useState({
        sugar: ["شکر", 100],
        flour: ["آرد", 100],
        chocolate: ["شکلات", 100],
        coffee: ["کافئین", 100]
    });

    const [instance, setInstance] = useState({
        name: "",
        price: 0,
        category: "coffee",
        image: ""
    })

    // const [page, setPage] = useState(1)


    const { data: productResult, isLoading, error, isError, isFetching, refetch } = useProducts();
    const { data: categories } = UseCat();

    const { mutate: addProductReq } = UsePostProduct()
    const { mutate: removeProductHandler } = UseDeleteProduct()
    let productsData =
    {
        title: "محصولات موجود",
        columns: [
            "شماره",
            "اسم",
            "دسته بندی",
            "قیمت",
            "عکس",
            "میزان فروش",
            "حذف"
        ],
        rows: productResult ? [...productResult].reverse() : null
    }


    const [addFlag, setAddFlag] = useState(false)

    const changeMentalInputHandler = (e) => {
        const { name, value } = e.target;
        setMental(prevState => ({
            ...prevState,
            [name.split("-")[0]]: [name.split("-")[1], parseInt(value, 10)]
        }));
    };

    const changeProductInputHandler = (e) => {
        if (e.target.type === "file") {
            const { name, files } = e.target;
            setInstance(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        }
        else {
            const { name, value } = e.target;
            setInstance(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const addProductHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setAddFlag(prevState => !prevState)
    }


    useEffect(() => {

        const fetchAddPro = async () => {
            if (addFlag) {
                const categoryTarget = categories.find(cat => cat.name === instance["category"])
                const formData = new FormData();
                formData.append('sugar', mental["sugar"][1]);
                formData.append('chocolate', mental["chocolate"][1]);
                formData.append('coffee', mental["coffee"][1]);
                formData.append('flour', mental["flour"][1]);
                formData.append('name', instance["name"]);
                formData.append('vertical', "1");
                formData.append('price', instance["price"]);
                formData.append('image', instance["image"]);
                formData.append('category_id', categoryTarget.id);
                addProductReq(formData)
                setInstance({
                    name: "",
                    price: 0,
                    category: "coffee",
                    image: ""
                })
                setMental({
                    sugar: ["شکر", 100],
                    flour: ["آرد", 100],
                    chocolate: ["شکلات", 100],
                    coffee: ["کافئین", 100]
                })


                setAddFlag(prevState => !prevState)

            }
        }
        fetchAddPro()
        // getProducts()

    }, [addFlag])
    return (
        <div className='cms_container'>

            <SidebarC />
            <div className="body__content">
                <NavbarC />
                <main className='m-2'>

                    <section class="new__product my-14">
                        <div class="container">
                            <h1 class="title">محصول جدید</h1>
                            <form class="customize__inputs">
                                <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
                                    <div>
                                        <label for="title" class="">نام محصول</label>
                                        <input
                                            type="text"
                                            name='name'
                                            value={instance.name}
                                            id='title'
                                            class=""
                                            placeholder="کتاب"
                                            required
                                            onChange={changeProductInputHandler}
                                        />
                                    </div>
                                    <div>
                                        <label for="price" class="">قیمت محصول</label>
                                        <input
                                            type="number"
                                            min={0}
                                            value={instance.price}
                                            dir="ltr"
                                            name='price'
                                            id='price'
                                            class=""
                                            placeholder="120000"
                                            required
                                            onChange={changeProductInputHandler}
                                        />
                                    </div>

                                    <div class="">
                                        <label class="" for="file_input">عکس محصول</label>
                                        <input class="" id="file_input" name='image' type="file" multiple
                                            onChange={changeProductInputHandler} />
                                    </div>

                                    <div class="">
                                        <label for="productCategory" class="">انتخاب نوع محصول</label>
                                        <select id="productCategory" name='category' onChange={changeProductInputHandler} value={instance.category}>
                                            <option value="coffee">قهوه</option>
                                            <option value="cake">کیک</option>
                                            <option value="bastani">بستنی</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <div class="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-8 mt-10 child:flex-col child:gap-1.5">

                                        {Object.entries(mental).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center">
                                                <span className="text-lg text-gray-900 dark:text-gray-300 capitalize">{value[0]}</span>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    name={`${key}-${value[0]}`}
                                                    value={value[1]}
                                                    onChange={changeMentalInputHandler}
                                                    className="pure_metal_input"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    class="hover:bg-blue-700 dark:focus:ring-blue-800"
                                    id="addProductBtn"
                                    onClick={addProductHandler}
                                >
                                    افزودن محصول
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* {productsData.rows?.length ? <TableTemplate {...productsData} /> : ""} */}
                    <TableTemplate {...{
                        ...productsData
                        ,
                        removeProduct: removeProductHandler,
                    }} />
                </main>
            </div>
        </div>
    )
}
