import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Icons from '../../components/Icons/Icons'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Products from '../../components/Products/Products'
import ProductBrand from '../../components/ProductBrand/ProductBrand'
import Category from '../../components/Category/Category'
import Club from '../../components/Club/Club'
import BlogsBox from '../../components/BlogsBox/BlogsBox'
import ContactUs from '../../components/ContactUs/ContactUs'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'
import { AppContext } from '../../Contexts/AppContext'
export default function Home() {
    const contextData = useContext(AppContext);
    console.log(contextData.userInfo);
    return (
        <>

            <Icons />
            <Navbar />
            <Sidebar />
            <main class="relative pb-44">



                <Header />
                <Products />
                <ProductBrand />
                <Category />
                {/* <Products /> */}

                <Club />
                <BlogsBox />
                <ContactUs />
                <Services />
                <div class="end__shape"></div>
            </main>

            <Footer />
        </>
    )
}