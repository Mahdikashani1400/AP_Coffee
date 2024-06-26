import React, { useState } from 'react'
import SidebarC from '../../components/CMS/SidebarC/SidebarC'
import NavbarC from '../../components/CMS/NavbarC/NavbarC'

export default function AddProduct() {
    const [inventory, setInventory] = useState({
        sugar: 100,
        flour: 150,
        chocolate: 50,
        coffee: 75
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInventory(prevState => ({
            ...prevState,
            [name]: parseInt(value, 10)
        }));
    };
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
                                            id="title"
                                            class=""
                                            placeholder="کتاب"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label for="price" class="">قیمت محصول</label>
                                        <input
                                            type="text"
                                            dir="ltr"
                                            id="price"
                                            class=""
                                            placeholder="120000"
                                            required
                                        />
                                    </div>

                                    <div class="">
                                        <label class="" for="file_input">عکس محصول</label>
                                        <input class="" id="file_input" type="file" multiple />
                                    </div>

                                    <div class="">
                                        <label for="productCategory" class="">انتخاب نوع محصول</label>
                                        <select id="productCategory" class="">
                                            <option value="coffee">قهوه</option>
                                            <option value="cake">کیک</option>
                                            <option value="bastani">بستنی</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div class="space-y-4 flex justify-between items-center child:flex-col child:gap-1.5">

                                        {Object.entries(inventory).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center">
                                                <span className="text-lg text-gray-900 dark:text-gray-300 capitalize">{key}</span>
                                                <input
                                                    type="number"
                                                    name={key}
                                                    value={value}
                                                    onChange={handleInputChange}
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