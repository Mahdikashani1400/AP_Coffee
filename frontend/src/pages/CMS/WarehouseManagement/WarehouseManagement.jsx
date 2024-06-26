import React, { useState } from 'react';
import SidebarC from '../../../components/CMS/SidebarC/SidebarC';
import NavbarC from '../../../components/CMS/NavbarC/NavbarC';
function WarehouseManagement() {
    const [inventory, setInventory] = useState({
        sugar: 100,
        flour: 150,
        chocolate: 50,
        coffee: 75
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInventory(prevState => ({
            ...prevState,
            [name]: parseInt(value, 10)
        }));
    };

    return (
        <div className='cms_container'>
            <SidebarC />
            <div className="body__content h-[500px]">
                <NavbarC />
                <main className='m-2'>

                    <div className='flex justify-center'>
                        <div className="p-6 w-[700px] mx-20 my-10 bg-white dark:bg-gray-900 rounded-md shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Warehouse Inventory</h2>
                                <button
                                    className="py-2 px-4 rounded bg-custom-purple text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                                >
                                </button>
                            </div>
                            <div className="space-y-4">
                                {Object.entries(inventory).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center">
                                        <span className="text-lg text-gray-900 dark:text-gray-300 capitalize">{key}</span>
                                        <input
                                            type="number"
                                            name={key}
                                            value={value}
                                            onChange={handleInputChange}
                                            className="pure_metal_input"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>



        </div>
    );
}

export default WarehouseManagement;
