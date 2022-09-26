import React, { useEffect, useState } from 'react';
import { getTimeRangeData } from '../../api'
import { Box } from '@mui/material';
import moment from 'moment'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default function Chart() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTimeRangeData().then(data => {
            setData(data.map(obj => ({ date: moment.unix(1625618160000 / 1000).format('DD/MM/YYYY'), views: obj.value })))
        }).catch(err => {
            setError(err)
        })
    }, [])

    if (error) {
        return (<Box>
            {error}
        </Box>)
    }
    return (
        <ResponsiveContainer width={'99%'} height={300}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
