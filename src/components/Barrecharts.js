import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router';
import {GetUserActivity} from '../api/service';


const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '9',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Barrecharts = () => {

  const {id} = useParams();
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(() =>{
    GetUserActivity(id).then(response =>{
      setActivity(response)
      setLoading(true)
    }); 
  },[id])




  return (
    <div className='bar-charts'>
     
        {loading &&
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={700}
              height={300}
              data={activity.sessions}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
              <CartesianGrid strokeDasharray="3 3" height={1} />
              
              <XAxis dataKey={
                activity.sessions.forEach(element =>{
                   return  activity.sessions.indexOf(element)+1
               } )
                } />
                

              <YAxis  orientation="right" />  
              <YAxis dataKey="kilogram" datakey="" axisLine={false} tickLine={false} tickMargin={30} type="number" domain={["dataMin -1", "dataMax"]} allowDecimals={false} />

              <Tooltip />
              <Legend verticalAlign="top" height={36} iconType="circle" align="right" />
              <Bar name="my dick" dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]}/>
             
              <Bar name="my dick2 " dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
           
            </BarChart>
            </ResponsiveContainer>
        }
    </div>
  );
};

export default Barrecharts;