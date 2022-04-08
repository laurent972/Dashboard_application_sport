import React from 'react';
import muscu from '../assets/muscu.svg';
import nageur from '../assets/nageur.svg';
import velo from '../assets/velo.svg';
import yoga from '../assets/yoga.svg';

const Aside = () => {
    return (
        <aside className='aside aside-nav'>
            <ul>
                <li><img src={yoga} alt='yoga' /></li>
                <li><img src={nageur} alt='yoga' /></li>
                <li><img src={velo} alt='yoga' /></li>
                <li><img src={muscu} alt='yoga' /></li>
            </ul>
        </aside>
    );
};

export default Aside;