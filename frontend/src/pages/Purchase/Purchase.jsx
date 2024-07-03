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



export default function Purchase() {

    const [purchaseData, setPurchaseData] = useState(
        {
            title: "سوابق خرید",
            columns: [
                "شماره",
                "تاریخ خرید",
                "زمان خرید",
                "قیمت پرداخت شده",
                "تعداد محصولات خریداری شده"
            ],
        }
    )
    const token = getItemLocale('token')

    useEffect(() => {
        const fetchPurchase = async () => {
            const reqPur = {
                pathKey: "orders", method: "GET", token: token, type: "json",
            }

            const [statusPur, resultPur] = await UseFetch(reqPur)
            setPurchaseData(prevState => {

                return { ...prevState, rows: resultPur }
            })
        }
        fetchPurchase()
    }, [])
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