import React from 'react';
import Areacharts from './Areacharts';
import BarreCharts from './Barrecharts';
import Radarcharts from './Radarcharts';
import Radialchart from './Radialcharts';



const Charts = () => {
    return (
        <div className='display-charts'>
            <BarreCharts />
            <div className='bottom-charts'>
                <Areacharts />
                <Radarcharts />
                <Radialchart />
            </div>
           
        </div>
    );
};

export default Charts;