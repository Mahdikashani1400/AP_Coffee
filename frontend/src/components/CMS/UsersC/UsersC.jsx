import React from 'react'

export default function UsersC() {
    return (
        <>
            <section class="last__users__table mt-10">
                <div class="container">
                    <div class="overflow-x-auto rounded-md bg-white dark:bg-gray-800 shadow-main">
                        <h4 class="font-bold text-xl my-5 px-4 dark:text-white text-zinc-800">
                            کاربران اخیرا <span class="text-blue-primary">ثبت نام</span>
                            شده
                        </h4>
                        <table class="public__table">
                            <thead class="">
                                <tr>
                                    <th scope="col" class="">شماره</th>
                                    <th scope="col" class="">نام و نام خانوادگی</th>
                                    <th scope="col" class="">نام کاربری</th>
                                    <th scope="col" class="">شماره</th>
                                    <th scope="col" class="">ایمیل</th>
                                    <th scope="col" class="">تاریخ ثبت نام</th>
                                </tr>
                            </thead>
                            <tbody>



                                <tr class="">
                                    <th scope="row" class="">2</th>
                                    <td class="px-5 py-5">ahmad rashidi</td>
                                    <td class="px-5 py-5">Ahmad8912</td>
                                    <td class="px-5 py-5">09123456785</td>
                                    <td class="px-5 py-5">Ahmad8912@gmail.com</td>
                                    <td class="px-5 py-5">2024-03-12</td>
                                </tr>

                                <tr class="">
                                    <th scope="row" class="">3</th>
                                    <td class="px-5 py-5">aref2287</td>
                                    <td class="px-5 py-5">aref2287</td>
                                    <td class="px-5 py-5">09123456785</td>
                                    <td class="px-5 py-5">aref2287@gmail.com</td>
                                    <td class="px-5 py-5">2024-01-28</td>
                                </tr>

                                <tr class="">
                                    <th scope="row" class="">4</th>
                                    <td class="px-5 py-5">فاطمه رحمانی</td>
                                    <td class="px-5 py-5">ftm_rahmani</td>
                                    <td class="px-5 py-5">09923162391</td>
                                    <td class="px-5 py-5">ftm_rahmani@gmail.com</td>
                                    <td class="px-5 py-5">2022-12-14</td>
                                </tr>

                                <tr class="">
                                    <th scope="row" class="">5</th>
                                    <td class="px-5 py-5">علی عبدی</td>
                                    <td class="px-5 py-5">ali_abdi</td>
                                    <td class="px-5 py-5">09921559821</td>
                                    <td class="px-5 py-5">abdi@gmail.com</td>
                                    <td class="px-5 py-5">2022-12-13</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
