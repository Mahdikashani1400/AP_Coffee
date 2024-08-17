import React, { useEffect, useState } from 'react'
import BlogsBox from '../../components/BlogsBox/BlogsBox'
import Icons from '../../components/Icons/Icons'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import UsersC from '../../components/CMS/TableTemplate/TableTemplate'
import TableTemplate from '../../components/CMS/TableTemplate/TableTemplate'
import { getItemLocale } from '../../data'
import UseFetch from '../../customHooks/UseFetch'
import UseOrders from '../../customHooks/UseOrders'



export default function Purchase() {
    const token = getItemLocale('token')

    const { data: orders } = UseOrders();
    let purchaseData =
    {
        title: "سوابق خرید",
        columns: [
            "شماره",
            "تاریخ خرید",
            "زمان خرید",
            "قیمت پرداخت شده",
            "تعداد محصولات خریداری شده"
        ],
        rows: orders ? [...orders].reverse() : null
    }



    return (
        <>



            <Icons />
            <Navbar />
            <Sidebar />
            <main class="relative py-44">



                <TableTemplate {...purchaseData} />
            </main>

            <Footer />
        </>
    )
}