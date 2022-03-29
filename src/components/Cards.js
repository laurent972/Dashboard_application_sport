import React from 'react';
import Card from './Card';
import cal from '../assets/calories-icon.svg';
import prot from '../assets/protein-icon.svg';
import carb from '../assets/carbs-icon.svg';
import fat from '../assets/fat-icon.svg';

const Cards = () => {

    return (
        <div className='display-cards'>
            <Card img={cal} title='1,930kCal' text='Calories' />
            <Card img={prot} title='155g' text='Proteines' />
            <Card img={carb} title='290g' text='Glucides' />
            <Card img={fat} title='50g' text='Lipides'  />
        </div>
    );
};

export default Cards;