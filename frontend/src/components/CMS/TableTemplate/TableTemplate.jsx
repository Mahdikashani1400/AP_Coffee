import React, { useState } from 'react';

export default function TableTemplate({ title, columns, rows, logic }) {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Number of rows per page

    // Calculate the indices for the current page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows?.slice(indexOfFirstRow, indexOfLastRow);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the total number of pages
    const totalPages = Math.ceil(rows?.length / rowsPerPage);


    return (
        <>
            <section className="last__users__table mt-10">
                <div className="container">
                    <div className="overflow-x-auto rounded-md bg-white dark:bg-gray-800 shadow-main">
                        <h4 className="font-bold text-xl my-5 px-4 dark:text-white text-blue-primary">
                            {title}
                        </h4>
                        <table className="public__table">
                            <thead>
                                <tr>
                                    {columns?.map((col, index) => (
                                        <th key={index} scope="col" className="">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows && title === "سوابق خرید" ? currentRows?.map((row, index) => {
                                    let countOfProduct = 0
                                    row.products.forEach(product => {
                                        countOfProduct += +product.quantity
                                    })
                                    return (
                                        <tr key={index} className="">
                                            <th scope="row" className="">{indexOfFirstRow + index + 1}</th>
                                            <td className="px-5 py-5">{row["created_at"].split("T")[0]}</td>
                                            <td className="px-5 py-5">{row.created_at.split(".")[0].split("T")[1]}</td>
                                            <td className="px-5 py-5">{row.price}</td>
                                            <td className="px-5 py-5">{countOfProduct}</td>
                                        </tr>
                                    )
                                })
                                    : title === "کاربران ثبت نام شده" ? currentRows?.map((row, index) => {
                                        return (
                                            <tr key={index} className="">
                                                <th scope="row" className="">{indexOfFirstRow + index + 1}</th>
                                                <td className="px-5 py-5">{row['username']}</td>
                                                <td className="px-5 py-5">{row['email']}</td>
                                                <td className="px-5 py-5">{row.phone_number}</td>
                                                <td className="px-5 py-5">{row.role}</td>
                                            </tr>
                                        )
                                    }) : currentRows?.map((row, index) => {
                                        let category = null
                                        if (row['category']['name'] === "bastani") {
                                            category = "بستنی"
                                        }
                                        if (row['category']['name'] === "cake") {
                                            category = "کیک"
                                        }
                                        if (row['category']['name'] === "coffee") {
                                            category = "قهوه"
                                        }
                                        return (
                                            <tr key={index} className="">
                                                <th scope="row" className="">{indexOfFirstRow + index + 1}</th>
                                                <td className="px-5 py-5">{row['name']}</td>
                                                <td className="px-5 py-5">{category}</td>
                                                <td className="px-5 py-5">{row['price']}</td>
                                                <td className="px-5 py-5 w-50">
                                                    <img src={`http://localhost:8000/inventory/media/product_images/${row.image.split("product_images/")[1]}`} alt="" />
                                                </td>
                                                <td className="px-5 py-5">{row.sales}</td>
                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination mt-10 flex justify-center">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white rounded-lg' : 'bg-gray-300 rounded-lg'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
