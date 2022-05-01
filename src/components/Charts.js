/**
 * Displaying user data Charts
 * @returns Charts
 */


import React, { useEffect, useState }  from 'react';
import Areacharts from './Areacharts';
import BarreCharts from './Barrecharts';
import Radarcharts from './Radarcharts';
import { useParams } from 'react-router';
import {GetUserInfos} from '../api/service';
import Cards from './Cards';
import RadialBarcharts from './RadialBarChart';
 

const Charts = () => {

    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
 
    
    // mise a jour des données utilisateur score + profil + keyData
    useEffect(() =>{
        GetUserInfos(id).then(response =>{
            setData(response)
            setLoading(true)
        }); 
        
    },[id])

    console.log(data);
    //Stockage des données
    const userProfil = data.userInfos;
    const userKeyData = data.keyData;
    const userScore = data.todayScore || data.score ;

    return (
        <div className='data-display'>
            {loading &&
            <>
              <div className='display-charts'>
                <h1>Bonjour <span>{userProfil.firstName}</span></h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
               {/* // Display weight/Calories */}
                <BarreCharts />
                <div className='bottom-charts'>
                    {/* Display sessions */}
                    <Areacharts />
                    {/* Display activities (cardio ...) */}
                    <Radarcharts />
                    {/* //Display user score */}
                    <RadialBarcharts score={userScore} />
                </div>
                </div>  
                <div className='display-cards'>
                    {/* //Display keyData  */}
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