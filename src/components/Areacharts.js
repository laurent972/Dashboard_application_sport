import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router';
import {GetUserSession} from '../api/service';

/**
 * 
 * Displaying areachart Day sessions
 * @returns 
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`} min</p>
      </div>
    );
  }

  return null;
};

const Areacharts = () => {
  const {id} = useParams();
  const [session, setSession] = useState([]);
  const [loading, setLoading] = useState(false);

    // mise a jour des données utilisateur 

  useEffect(() =>{
        GetUserSession(id).then(response =>{
            setSession(response)
            setLoading(true)
        });

    },[id])

    function day(){
      session.sessions.forEach(element => {
          if(element.day === 1) element.day = 'L';
          if(element.day === 2) element.day= 'M';
          if(element.day === 3) element.day = 'M';
          if(element.day === 4) element.day = 'J';
          if(element.day === 5) element.day = 'V';
          if(element.day === 6) element.day = 'S';
          if(element.day === 7) element.day = 'D';
      });
        return session.sessions
    }

  {loading &&  
    day()
  }
  




  return (
    <div className='area-chart'>
      <span className='areaTitle'>Durée moyenne des session</span>
          <ResponsiveContainer width="100%" height={250}>
     
        <AreaChart
          width={120}
          height={200}
          data={session.sessions}
          margin={{
            top: 0,
            right: 90,
            left:-30,
            bottom: 0,
          }}
        >
            
          <CartesianGrid horizontal={false} vertical={false} x={-50} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: 'white'}} />
          <YAxis axisLine={false} tick={false} />
          <Tooltip content={CustomTooltip} />
          <Area type="monotone" dataKey="sessionLength" stroke="#fff" fill="transparent" strokeWidth={2} />

       

        </AreaChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default Areacharts;