import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router';
import {GetUserActivity} from '../api/service';


/**
 * 
 * Displaying weight/calories
 * @returns 
 */


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-barChart">
        <p className="label">{`${payload[0].value}`}kg</p>
        <p className="label">{`${payload[1].value}`}Kcal</p>
        
      </div>
    );
  }
  return null;
};



const Barrecharts = () => {

  const {id} = useParams();
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
 
    // mise a jour des données utilisateur 

  useEffect(() =>{
    GetUserActivity(id).then(response =>{
      setActivity(response)
      setLoading(true)
    }); 
  },[id])


  function dateFormat(){
    activity.sessions.map(element=> {
      const date = new Date(element.day)
      return element.day = date.toLocaleDateString()
    } )
   }
   
  {loading &&
    dateFormat()
  }

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
              
              <XAxis  dataKey="day" fontSize={11}/>
                
              <YAxis fontSize={11} orientation="right" />  
              <YAxis fontSize={11} dataKey="kilogram" axisLine={false} tickLine={false} tickMargin={30} type="number" domain={["dataMin -1", "dataMax"]} allowDecimals={false} />

              <Tooltip content={CustomTooltip}/>
              <Legend verticalAlign="top" height={36} iconType="circle" align="right" />
              <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]}/>
             
              <Bar name="Calories brûlées (kCal) " dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
              <text
                x="10%"
                y="10%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="barChart-title"
                fill="#020203"
              >
                Activité quotidienne
              </text>
            </BarChart>
            </ResponsiveContainer>
        }
    </div>
  );
};

export default Barrecharts;