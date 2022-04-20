import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Charts from '../components/Charts';
import Cards from '../components/Cards';

const Home = () => {
   
    return (
        <>
            <Header />
            <main className='main' aria-label='main-content'>
                <Aside />
                <section className='main-content'>
                    
                        <Charts />
                      
                   
                
                </section>
            </main>

            
        </>
    );
};

export default Home;