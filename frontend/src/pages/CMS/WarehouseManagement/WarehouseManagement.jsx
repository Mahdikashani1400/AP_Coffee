import React, { useEffect, useState } from 'react';
import SidebarC from '../../../components/CMS/SidebarC/SidebarC';
import NavbarC from '../../../components/CMS/NavbarC/NavbarC';
import { getItemLocale } from '../../../data';
import UseFetch from '../../../customHooks/UseFetch';
import ShowToast from '../../../ShowToast';
function WarehouseManagement() {
    const [mental, setMental] = useState({
        sugar: ["شکر", 0],
        flour: ["آرد", 0],
        chocolate: ["شکلات", 0],
        coffee: ["کافئین", 0]
    });
    const [update, setUpdate] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMental(prevState => ({
            ...prevState,
            [name.split("-")[0]]: [name.split("-")[1], parseInt(value, 10)]
        }));
    };

    const updateMentalHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setUpdate(prevState => !prevState)

    }
    useEffect(() => {
        const token = getItemLocale("token")
        const fetchMental = async () => {
            const reqPutStorage = {
                pathKey: "storage", method: "GET", token: token, type: "json",
            }

            const [statusStorage, resultStorage] = await UseFetch(reqPutStorage)

            setMental(prevState => {
                return {
                    sugar: ["شکر", resultStorage["sugar"]],
                    flour: ["آرد", resultStorage["flour"]],
                    chocolate: ["شکلات", resultStorage["chocolate"]],
                    coffee: ["کافئین", resultStorage["coffee"]],
                }
            })
        }
        fetchMental()
    }, [])
    useEffect(() => {

        const token = getItemLocale("token")

        const fetchMental = async () => {
            if (update) {

                const reqPutStorage = {
                    pathKey: "storage", method: "PUT", token: token, type: "json",
                    data: {
                        sugar: mental["sugar"][1],
                        chocolate: mental["chocolate"][1],
                        coffee: mental["coffee"][1],
                        flour: mental["flour"][1],
                    }
                }

                const [statusStorage, resultStorage] = await UseFetch(reqPutStorage)
                statusStorage && ShowToast('مقادیر مواد اولیه با موفقیت بروزرسانی شدند.', "success")
                setUpdate(prevState => !prevState)

            }
        }
        fetchMental()
    }, [update])




    return (
        <div className='cms_container'>
            <SidebarC />
            <div className="body__content h-[125vh]">
                <NavbarC />
                <main className='m-2'>

                    <section class="new__product my-14">
                        <div class="container">
                            <h1 class="title">کنترل مواد اولیه</h1>
                            <form class="customize__inputs">

                                <div className="mb-10">
                                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 child:flex-col child:gap-1.5">

                                        {Object.entries(mental).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center">
                                                <span className="text-lg text-gray-900 dark:text-gray-300 capitalize">{value[0]}</span>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    name={`${key}-${value[0]}`}
                                                    value={value[1]}
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
                                    onClick={updateMentalHandler}
                                >
                                    اعمال تغییرات
                                </button>
                            </form>
                        </div>
                    </section>
                </main>
            </div>



        </div>
    );
}

export default WarehouseManagement;
