import React from 'react'
import Products from '../../components/Products/Products'
import Icons from '../../components/Icons/Icons'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

export default function ProductPage() {
    const productInfo = {
        name: "بستنی"
    }
    return (
        <>

            <Icons />
            <Navbar />
            <Sidebar />
            <main class="relative pb-44 product_page_main">

                <Products {...productInfo} />



            </main>

            <Footer />
        </>
    )
}