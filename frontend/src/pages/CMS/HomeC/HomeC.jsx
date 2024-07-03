import React, { useEffect, useState } from 'react'
import SidebarC from '../../../components/CMS/SidebarC/SidebarC'
import NavbarC from '../../../components/CMS/NavbarC/NavbarC'
import ChartC from '../../../components/CMS/ChartC/ChartC'
import TableTemplate from '../../../components/CMS/TableTemplate/TableTemplate'
import { getItemLocale } from '../../../data'
import UseFetch from '../../../customHooks/UseFetch'

export default function HomeC() {
    const [userData, setUserData] = useState(
        {
            title: "کاربران ثبت نام شده",
            columns: [
                "شماره",
                "نام کاربری",
                "ایمیل",
                "شماره تماس",
                "نقش"
            ],
        }
    )
    const token = getItemLocale('token')

    useEffect(() => {
        const fetchUser = async () => {
            const reqUser = {
                pathKey: "users", method: "GET", token: token, type: "json",
            }

            const [statusUser, resultUser] = await UseFetch(reqUser)
            setUserData(prevState => {
                return { ...prevState, rows: resultUser['users'] }
            })
        }
        fetchUser()
    }, [])
    return (
        <div className='cms_container'>

            <SidebarC />
            <div className="body__content">
                <NavbarC />
                <main className='m-2'>

                    <ChartC />

                    <TableTemplate {...userData} />
                </main>
            </div>
        </div>
    )
}


// email
// :
// "ali@example.com"
// full_name
// :
// "ali ahmadi"
// id
// :
// "ff51c7a2-1090-4f91-896c-fa5f80e55be1"
// phone_number
// :
// 9366888418
// role
// :
// "USER"
// username
// :
// "ali"