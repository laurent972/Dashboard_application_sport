import React, { useEffect, useState }  from 'react';
import Areacharts from './Areacharts';
import BarreCharts from './Barrecharts';
import Radarcharts from './Radarcharts';
import { useParams } from 'react-router';
import {GetUserInfos, GetUserSession} from '../api/service';
import Cards from './Cards';
import RadialBarcharts from './RadialBarChart';

 

const Charts = () => {

    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [activity, setActivity] = useState([]);
    const [perf, setPerf] = useState([]);
    

    useEffect(() =>{
        GetUserInfos(id).then(response =>{
            setData(response)
            setLoading(true)
        }); 
        
    },[id])

    const userProfil = data.userInfos;
    const userKeyData = data.keyData;
    const userScore = data.todayScore || data.score ;

    // console.log(session);

    return (
        <div className='data-display'>
            {loading &&
            <>
              <div className='display-charts'>
                <h1>Bonjour <span>{userProfil.firstName}</span></h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
                <BarreCharts data={activity} />
                <div className='bottom-charts'>
                    <Areacharts />
                    <Radarcharts data={perf} />
                    <RadialBarcharts score={userScore} />
                </div>
                </div>  
                <div className='display-cards'>
                 <Cards keydata={userKeyData} />
                </div>
            </>
            }
            {!loading && 
                <div className='loading'>
                     <img src={require("../assets/Iphone-spinner-2.gif")} alt="loading"  height={40} width={40} />
                </div>
            }
        </div>
        
    );
};

export default Charts;