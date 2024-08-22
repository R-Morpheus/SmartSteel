import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import heroImg from '../images/hero-img.jpg';

const Hero = () => {
    return (
        <>
            <div className="relative hero h-screen w-full bg-cover bg-center" id="hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}

                <div>
                    <NavBar />
                </div>

                <div className="relative z-10 overflow-hidden mx-4 lg:p-2 md:p-12 h-full flex items-center justify-center" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 pl-6 justify-between text-center lg:text-left w-full">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                                Мы сделаем такую деталь что ты просто закачаешься
                            </h1>
                            <div className="text-xl font-semibold trackrng-tight mb-5 text-gray-300">Наша команда доведет тебя от начала проекта до самого ада.</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Оставить заявку
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
