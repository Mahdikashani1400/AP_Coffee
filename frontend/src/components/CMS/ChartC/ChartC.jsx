import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChartC() {
    const initialData = {
        day: [
            { name: 'Monday', coffee: 300, cake: 150, icecream: 200 },
            { name: 'Tuesday', coffee: 500, cake: 240, icecream: 350 },
            { name: 'Wednesday', coffee: 450, cake: 200, icecream: 300 },
            { name: 'Thursday', coffee: 400, cake: 180, icecream: 280 },
            { name: 'Friday', coffee: 600, cake: 220, icecream: 400 },
            { name: 'Saturday', coffee: 700, cake: 260, icecream: 450 },
            { name: 'Sunday', coffee: 650, cake: 300, icecream: 500 }
        ],
        month: [
            { name: 'January', coffee: 1200, cake: 1100, icecream: 1400 },
            { name: 'February', coffee: 1100, cake: 1050, icecream: 1350 },
            { name: 'March', coffee: 1400, cake: 1150, icecream: 1600 },
            { name: 'April', coffee: 1600, cake: 1200, icecream: 1650 },
            { name: 'May', coffee: 1550, cake: 1300, icecream: 1700 },
            { name: 'June', coffee: 1500, cake: 1400, icecream: 1750 },
            { name: 'July', coffee: 1450, cake: 1350, icecream: 1800 },
            { name: 'August', coffee: 1550, cake: 1250, icecream: 1850 },
            { name: 'September', coffee: 1600, cake: 1300, icecream: 1900 },
            { name: 'October', coffee: 1650, cake: 1350, icecream: 1950 },
            { name: 'November', coffee: 1700, cake: 1400, icecream: 2000 },
            { name: 'December', coffee: 1800, cake: 1450, icecream: 2050 }
        ],
        year: [
            { name: '2022', coffee: 15000, cake: 12000, icecream: 18000 },
            { name: '2023', coffee: 16000, cake: 13000, icecream: 19000 },
            { name: '2024', coffee: 17000, cake: 14000, icecream: 20000 }
        ]
    };
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

    const [timeFrame, setTimeFrame] = useState('day');
    const [title, setTitle] = useState('coffee');
    const [data, setData] = useState(initialData[timeFrame]);

    useEffect(() => {
        setData(initialData[timeFrame]);
    }, [timeFrame, title]);

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
                <button onClick={() => setTimeFrame('day')} style={buttonStyle}>Day</button>
                <button onClick={() => setTimeFrame('month')} style={buttonStyle}>Month</button>
                <button onClick={() => setTimeFrame('year')} style={buttonStyle}>Year</button>

                <select value={title} onChange={e => setTitle(e.target.value)} style={selectStyle}>
                    <option value="coffee">Coffee</option>
                    <option value="cake">Cake</option>
                    <option value="icecream">Ice Cream</option>
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
