import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getItemLocale } from '../../../data';
import UseFetch from '../../../customHooks/UseFetch';
import {
    groupBy,
    map,
    orderBy,
} from 'lodash';
export default function ChartC() {
    // const initialData =
    //     [
    //         { name: 'Monday', coffee: 300, cake: 150, icecream: 200 },
    //         { name: 'Tuesday', coffee: 500, cake: 240, icecream: 350 },
    //         { name: 'Wednesday', coffee: 450, cake: 200, icecream: 300 },

    //     ]
    function getDatesNDaysAgo(n) {
        const dates = [];

        for (let i = 0; i <= n - 1; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);

            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');

            dates.push(`${year}-${month}-${day}`);
        }

        return dates;
    }



    const [title, setTitle] = useState('coffee');
    const [data, setData] = useState([]);
    const token = getItemLocale("token")
    console.log(token);
    useEffect(() => {

        const fetchCategory = async () => {
            const reqPutStorage = {
                pathKey: "categories", method: "GET", token: token, type: "json",
            }

            const [statusCat, resultCat] = await UseFetch(reqPutStorage)
            setData(prevState => {
                let finalArray = []

                getDatesNDaysAgo(3).forEach((date) => {
                    resultCat.forEach(cat => {
                        finalArray.push({
                            name: date,
                            [cat.name]: cat['sales'][date] || 0
                        })
                    })
                })

                const groupedData = groupBy(finalArray, 'name');

                // Merge properties of objects with the same date
                const formattedData = map(groupedData, (items, date) => {
                    return items.reduce((result, item) => {
                        return { ...result, ...item, name: date };
                    }, {});
                });

                // Sort the formatted data by date in descending order
                const sortedData = orderBy(formattedData, ['name'], ['desc']);
                console.log(sortedData);
                return sortedData
            })
            console.log(resultCat);
        }
        fetchCategory()
    }, [])
    const CustomTick = (props) => {
        const { x, y, payload } = props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} fill="#666" textAnchor="end">
                    <tspan x="-50" dy="0.355em">{payload.value}</tspan>
                </text>
            </g>
        );
    };



    useEffect(() => {
        setData(data);
    }, [title]);

    // Styling for buttons and dropdown
    const buttonStyle = {
        backgroundColor: '#696CFF', // Purple color
        color: 'white',
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none'
    };

    const selectStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'lavender', // Light purple background
        color: '#696CFF' // Purple text color
    };

    return (
        <div className=' hidden md:block'>
            <div className="controls" style={{ textAlign: 'center', margin: '20px' }}>
                <button style={buttonStyle}>روزانه</button>


                <select value={title} onChange={e => setTitle(e.target.value)} style={selectStyle} className='font-bold'>
                    <option value="coffee">قهوه</option>
                    <option value="cake">کیک</option>
                    <option value="icecream">بستنی</option>
                </select>
            </div>

            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                        <XAxis dataKey="name" stroke="#696CFF" />
                        <YAxis stroke="#696CFF" tick={<CustomTick />} />
                        <Tooltip />
                        <Bar dataKey={title} fill="#696CFF" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
