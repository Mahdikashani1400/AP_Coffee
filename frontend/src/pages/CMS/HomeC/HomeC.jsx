import React from 'react'
import SidebarC from '../../../components/CMS/SidebarC/SidebarC'
import NavbarC from '../../../components/CMS/NavbarC/NavbarC'
import ChartC from '../../../components/CMS/ChartC/ChartC'
import TableTemplate from '../../../components/CMS/TableTemplate/TableTemplate'

export default function HomeC() {
    return (
        <div className='cms_container'>

            <SidebarC />
            <div className="body__content">
                <NavbarC />
                <main className='m-2'>

                    <ChartC />

                    <TableTemplate />
                </main>
            </div>
        </div>
    )
}