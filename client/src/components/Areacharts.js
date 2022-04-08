import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Areacharts = () => {
  return (
    <div className='area-chart'>
       
        <AreaChart
          width={390}
          height={200}
          data={data}
          margin={{
            top: 0,
            right: 90,
            left:-30,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal={false} vertical={false} x={-50} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'white'}} />
          <YAxis axisLine={false} tick={false} />
          <Tooltip content={CustomTooltip} />
          <Area type="monotone" dataKey="uv" stroke="#fff" fill="transparent" />
        </AreaChart>
       
      
    </div>
  );
};

export default Areacharts;