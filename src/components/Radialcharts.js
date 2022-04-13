import React from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Label, Cell, Text } from 'recharts';

const data = [
  { name: 'Group A', value: 12 },
  { name: 'Group B', value: 100 },
 
];


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


const CustomLabel = ({ viewBox, objectif = 0 }) => {
  const { cx, cy } = viewBox;
  return (
    <React.Fragment>
      <text x={cx - 30} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "1.9em",
            fill: "#020203",
            fontFamily: "Roboto"
          }}
        >
          {objectif} %
        </tspan>
      </text>
      <text x={cx - 50} y={cy + 15}>
        <tspan
          style={{
            fontSize: "0.8em",
            fill: "grey",
            fontFamily: "Roboto"
          }}
        >
          de votre objectif
        </tspan>
      </text>
    </React.Fragment>
  );
};


const Radialcharts = () => {

  return (
    <div className='radial-chart'>
        
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            fill="red"
            dataKey="value"
            startAngle={-270}
            
          >

          {data.map((entry, index) => {
                if (index === 1) {
                  return <Cell key={`cell-${index}`} fill="#f3f6f9" />; // make sure to map the index to the colour you want
                }
                return <Cell key={`cell-${index}`} fill="#FF0000" cornerRadius={10}/>;
              })}

              <Label
                    content={<CustomLabel objectif={data[0].value} />}

                  position="center"
                  fill="black"
                  style={{
                    fontSize: "10px",
                    fontWeight: "55",
                    fontFamily: "Roboto"
                  }}
                />
               
            </Pie>
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default Radialcharts;