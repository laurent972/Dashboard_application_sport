import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router';
import { GetUserPerformance} from '../api/service';



const Radarcharts = () => {

  const {id} = useParams();
  const [perf, setPerf] = useState([]);
  const [loading, setLoading] = useState(false);
      // mise a jour des données utilisateur 

    useEffect(() =>{
      GetUserPerformance(id).then(response =>{
          setPerf(response)
          setLoading(true)
      });

    },[id]);

    console.log(perf);
    /***
     * Display labels
     * @return array
     */
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