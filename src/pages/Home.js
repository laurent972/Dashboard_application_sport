import React from 'react';
import Aside from '../components/Aside';
import Content from '../components/Content';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <main className='main' aria-label='main-content'>
                <Aside />
                <Content />
            </main>

            
        </>
    );
};

export default Home;