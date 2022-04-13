import React, { useEffect, useState }  from 'react';
import Areacharts from './Areacharts';
import BarreCharts from './Barrecharts';
import Radarcharts from './Radarcharts';
import Radialchart from './Radialcharts';
import { useParams } from 'react-router';
import {GetUserInfos} from '../api/service';

 

const Charts = () => {

    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [toto, setToto] = useState([])

    useEffect(() =>{
        GetUserInfos(id).then(response =>{
            setToto(response)
            setLoading(true)
        });    
    },[setToto])

    console.log(loading);
    console.log(toto);
    

    return (
        <div className='display-charts'>
            {loading &&
            <>
                <h1>Bonjour <span>{toto.userInfos.firstName}</span></h1>
                    <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
                <BarreCharts />
                <div className='bottom-charts'>
                    <Areacharts />
                    <Radarcharts />
                    <Radialchart />
                </div>
            </>
            }

            
        </div>
    );
};

export default Charts;