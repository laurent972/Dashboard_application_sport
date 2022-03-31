import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar,VictoryChart,VictoryAxis, VictoryTheme, VictoryStack, VictoryGroup, VictoryLabel, VictoryLegend } from 'victory';

const data = [
  {quarter: 1, poids: 69.85, calories: 2},
  {quarter: 2, poids: 69.99, calories: 3},
  {quarter: 3, poids: 69.85, calories: 4},
  {quarter: 4, poids: 72.00, calories: 0},
  {quarter: 5, poids: 69.85, calories: 5},
  {quarter: 6, poids: 69.85, calories: 5},
  {quarter: 7, poids: 68.05, calories: 7},
  {quarter: 8, poids: 69.85, calories: 5},
  {quarter: 9, poids: 69.85, calories: 6},
  {quarter: 10, poids: 69.85, calories: 7}
];

const Barrecharts = () => {
  return (
    <div className='bar-charts'>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material} height={250} width={800}>

      <VictoryLabel
        x={5}
        y={10}
        textAnchor="left"
        text="Activité quotidienne"
        style={[
          { fontSize: 14, fontFamily: "Roboto", fontWeight:"500" }
        ]}
      />

      <VictoryLegend 
        x={550} y={5}
        orientation="horizontal"
        gutter={20}
        
        data={[
          { name: "Poids(kg)", symbol: { fill: "#282D30" } },
          { name: "Calories brûlées (kcal)", symbol: { fill: "#E60000" } }
        ]}

        style={{
          labels: {fontSize: 10, fontFamily:"Roboto", fontWeight:"500", fill:"#74798C"}
        }}
      
      />
      <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6,7,8,9,10]}
          tickFormat={["1", "2", "3", "4","5 ", "6", "7", "8","9", "10"]}
        />
      <VictoryAxis
          dependentAxis
          orientation="right"
          tickFormat={["1", "2", "3"]}
          domain={{y: [69, 71]}}
          
        />
        
      <VictoryGroup offset={10}   style={{ data: { width: 7 } }} colorScale={["#282D30", "#E60000"]} >
        <VictoryBar
          cornerRadius={{ top: 4}}
          data={data}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="poids"
        />

        <VictoryBar
          cornerRadius={{ top: 4}}
          data={data}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="calories"
        />

      </VictoryGroup>
     
      </VictoryChart>
  
    </div>
  );
};

export default Barrecharts;