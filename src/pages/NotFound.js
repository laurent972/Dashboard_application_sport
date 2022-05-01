import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Charts from '../components/Charts';

const NotFound = () => {
    return (
        <>
        <Header />
        <main className='main' aria-label='main-content'>
            <Aside />
            <section className='main-content'>
            <div className='notFound'>
                <span>Désolé</span>
                <p>Nous n'avons pas de données à afficher</p>
            </div>
            </section>
        </main>

        
    </>
    );
};

export default NotFound;