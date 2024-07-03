import React, { useEffect, useState } from 'react'
import SidebarC from '../../components/CMS/SidebarC/SidebarC'
import NavbarC from '../../components/CMS/NavbarC/NavbarC'
import { getItemLocale } from '../../data';
import UseFetch from '../../customHooks/UseFetch';
import ShowToast from '../../ShowToast';

export default function AddProduct() {
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

    const [addFlag, setAddFlag] = useState(false)
    const [categories, setCategories] = useState([])

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
        const token = getItemLocale("token")
        const fetchCategory = async () => {
            const reqCat = {
                pathKey: "categories", method: "GET", token: token, type: "json",
            }
            const [statusCat, resultCat] = await UseFetch(reqCat)
            console.log(resultCat);
            setCategories(prevState => resultCat)
        }
        fetchCategory()
    }, [])

    useEffect(() => {
        const token = getItemLocale("token")

        const fetchAddPro = async () => {
            if (addFlag) {
                const categoryTarget = categories.find(cat => cat.name === instance["category"])
                console.log(categories);
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

                await fetch('http://localhost:8000/inventory/products/', {
                    // method: 'GET',
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                    body: formData,
                })
                    .then(response => {
                        if (response.status === 201) {
                            ShowToast('محصول مورد نظر با موفقیت اضافه شد', "success")
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
                        } else {
                            ShowToast('لطفا اطلاعات خواسته شده را به درستی وارد کنید', "error")
                        }
                        return response.json()
                    })

                setAddFlag(prevState => !prevState)

            }
        }
        fetchAddPro()
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
                                        <select id="productCategory" name='category' onChange={changeProductInputHandler}>
                                            <option value="coffee">قهوه</option>
                                            <option value="cake">کیک</option>
                                            <option value="bastani">بستنی</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <div class="space-y-4 flex justify-between items-center child:flex-col child:gap-1.5">

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

                    <section class="products__table">
                        <div class="container">
                            <div
                                class="overflow-x-auto rounded-md bg-white dark:bg-gray-800 shadow-main"
                            >
                                <h4
                                    class="font-bold text-xl my-5 px-4 dark:text-white text-zinc-800"
                                >
                                    لیست <span class="text-blue-primary">محصولات</span>
                                </h4>
                                <table class="public__table">
                                    <thead class="">
                                        <tr>
                                            <th scope="col" class="">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-[5px] focus:drop-shadow"
                                                />
                                            </th>
                                            <th scope="col" class="">شماره</th>
                                            <th scope="col" class="">نام محصول</th>
                                            <th scope="col" class="">دسته بندی</th>
                                            <th scope="col" class="">امتیاز</th>
                                            <th scope="col" class="">تعداد خریداران</th>
                                            <th scope="col" class="">قیمت</th>
                                            <th scope="col" class="">ویرایش</th>
                                            <th scope="col" class="">حذف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="">
                                            <th scope="col" class="">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-[5px] focus:drop-shadow"
                                                />
                                            </th>
                                            <th scope="row" class="">23344</th>
                                            <td class="px-5 py-5">کتاب HTML</td>
                                            <td class="px-5 py-5">550</td>
                                            <td class="px-5 py-5">در حال فروش</td>
                                            <td class="px-5 py-5">50,000</td>
                                            <td class="px-4 py-5">
                                                <a href="#" class="edit">ویرایش</a>
                                            </td>
                                            <td class="px-4 py-5">
                                                <a href="#" class="remove">حذف</a>
                                            </td>
                                        </tr>
                                        <tr class="">
                                            <th scope="col" class="">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-[5px] focus:drop-shadow"
                                                />
                                            </th>
                                            <th scope="row" class="">23635</th>
                                            <td class="px-5 py-5">کتاب HTML</td>
                                            <td class="px-5 py-5">550</td>
                                            <td class="px-5 py-5">در حال فروش</td>
                                            <td class="px-5 py-5">50,000</td>
                                            <td class="px-4 py-5">
                                                <a href="#" class="edit">ویرایش</a>
                                            </td>
                                            <td class="px-4 py-5">
                                                <a href="#" class="remove">حذف</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}