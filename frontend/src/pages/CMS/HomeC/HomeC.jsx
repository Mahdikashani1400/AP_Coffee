import React from 'react'
import SidebarC from '../../../components/CMS/SidebarC/SidebarC'
import NavbarC from '../../../components/CMS/NavbarC/NavbarC'
import ChartC from '../../../components/CMS/ChartC/ChartC'
import UsersC from '../../../components/CMS/UsersC/UsersC'

export default function HomeC() {
    return (
        <div className='cms_container'>

            <SidebarC />
            <div className="body__content">
                <NavbarC />
                <main className='m-2'>

                    <ChartC />

                    <UsersC />
                </main>
            </div>
        </div>
    )
}