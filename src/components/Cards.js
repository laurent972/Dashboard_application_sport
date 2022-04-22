import React from 'react';
import Card from './Card';
import cal from '../assets/calories-icon.svg';
import prot from '../assets/protein-icon.svg';
import carb from '../assets/carbs-icon.svg';
import fat from '../assets/fat-icon.svg';
import PropTypes from 'prop-types';



/**
 * display cards
 * @param  {array number} props
 */

const Cards = (props) => {   
    return (
        <div className=''>
            <Card img={cal} title={props.keydata.calorieCount +'kCal'} text='Calories' />
            <Card img={prot} title={props.keydata.proteinCount +'g'} text='Proteines' />
            <Card img={carb} title={props.keydata.carbohydrateCount +'g'} text='Glucides' />
            <Card img={fat} title={props.keydata.lipidCount +'g'} text='Lipides'  />
        </div>
    );
};

Cards.propTypes = {
    keydata: PropTypes.object
}

export default Cards;

