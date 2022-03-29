import React from 'react';
import Areacharts from './Areacharts';
import BarreChart from './Barrecharts';
import Radarcharts from './Radarcharts';
import Radialchart from './Radialcharts';



const Charts = () => {
    return (
        <div className='display-charts'>
            <h2>Charts</h2>
            <BarreChart />
            <div className='bottom-charts'>
                <Areacharts />
                <Radarcharts />
                <Radialchart />
            </div>
           
        </div>
    );
};

export default Charts;