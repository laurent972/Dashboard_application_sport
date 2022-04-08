import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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
  return (
    <div className='radar-chart'>
      
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} width={330} height={300}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 11}} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar name="Mike" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      
    </div>
  );
};

export default Radarcharts;