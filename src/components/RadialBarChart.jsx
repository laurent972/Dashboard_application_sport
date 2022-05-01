import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis,  ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * 
 * Display score
 * @returns 
 */

const RadialBarcharts = (props) => {

    const score = props.score*100;
    const objectif = [{score:score}];

    return (    
    <div className='radial-chart'>
        <ResponsiveContainer  height={300}>
        <RadialBarChart cx="50%" cy="50%"
         innerRadius="70%" outerRadius="100%" 
         barSize={20} 
         
         data={objectif} 
         
         startAngle={-270} endAngle={90} fill="#FF0000"  
           width={400}
          height={350}>
        <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
            >
            
          </PolarAngleAxis>
          <RadialBar
            minAngle={15}
            background
            dataKey="score"
            cornerRadius={10}
          >
      
          </RadialBar> 
          
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="#000"
          >
            {score}%
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label-text"
            fill="#74798C"
          >
            de votre objectif
          </text>
        </RadialBarChart>
        
        </ResponsiveContainer>  
      </div>
    );
}

RadialBarcharts.propTypes = {
  keydata: PropTypes.object
}


export default RadialBarcharts;