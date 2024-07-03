import React from 'react'
import BlogsBox from '../../components/BlogsBox/BlogsBox'
import Icons from '../../components/Icons/Icons'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

export default function Blogs() {
    return (
        <>



            <Icons />
            <Navbar />
            <Sidebar />
            <main class="relative py-44">

                <BlogsBox />




            </main>

            <Footer />
        </>
    )
}
