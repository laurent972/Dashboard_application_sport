import React from 'react';
import Charts from './Charts';
import Cards from './Cards';

const Content = () => {

    const prenom = 'Thomas';

    return (
        <section className='main-content'>
            <h1>Bonjour <span>{prenom}</span></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            <div className='data-display'>
                <Charts />
                <Cards />
            </div>
        
        </section>
    );
};

export default Content;