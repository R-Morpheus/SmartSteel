import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
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
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

