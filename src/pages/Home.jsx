import React from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Clients />
            <About />
            <Footer />
        </>

    )
}

export default Home;

