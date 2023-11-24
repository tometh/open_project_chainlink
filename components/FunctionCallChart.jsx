import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import MonthWidget from './MonthWidget';

const data = [
  {
    name: '01',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '07',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '13',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '19',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '25',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '31',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const FunctionCallChart = () => {
  return (
    <div className="bg-white">
      <div className="flex gap-1 items-center ml-[100px] pt-8">
        <h1 className="font-bold">Function Calls</h1>
        <AiFillExclamationCircle className="text-blue-600" />
      </div>
      <div className="ml-[80px] border p-6 w-[90%] mt-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-gray-500 text-sm">
            NO. OF FUNCTION CALLS PER MONTH
          </h1>
          <MonthWidget />
        </div>
        <AreaChart
          width={1150}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#388ee469"
            fill="#388ee469"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default FunctionCallChart;
