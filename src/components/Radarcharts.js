import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router';
import { GetUserPerformance} from '../api/service';


const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];



const Radarcharts = () => {

  const {id} = useParams();
  const [perf, setPerf] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() =>{

      GetUserPerformance(id).then(response =>{
          setPerf(response)
          setLoading(true)
      });

    },[id]);

    function kind(){
      perf.data.forEach(element => {
          if(element.kind === 2) element.kind = 'Energie';
          if(element.kind === 3) element.kind = 'Endurance';
          if(element.kind === 4) element.kind = 'Force';
          if(element.kind === 5) element.kind = 'Vitesse';
          if(element.kind === 6) element.kind = 'Intensité';
          if(element.kind === 1) element.kind = 'Cardio';

      });
        return perf.data
    }

  {loading &&  
    kind()
  }
  

  return (
    <div className='radar-chart'>
        {loading && 
        <ResponsiveContainer height={300}>

          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={perf.data} width={233} height={300}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 11}} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>

          </ResponsiveContainer>
        }
    </div>
  );
};

export default Radarcharts;