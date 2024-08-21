import React from 'react';
import aeroflot from '../images/clients/aeroflot.png';
import gazprom from '../images/clients/Gazprom-Logo-rus.svg.png';
import kamaz from '../images/clients/kamaz.svg';
import orgsintez from '../images/clients/orgsintez.jpg';
import rosaviatech from '../images/clients/rosaviatech.png';
import tatneft from '../images/clients/tatneft4114.jpg';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-white">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Нам доверяют</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Некоторые из наших партнеров.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage}
                             className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={aeroflot} alt="client"/>
                        </div>

                        <div style={clientImage}
                             className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={gazprom} alt="client"/>
                        </div>

                        <div style={clientImage}
                             className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={rosaviatech} alt="client"/>
                        </div>

                        <div style={clientImage}
                             className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={kamaz} alt="client"/>
                        </div>

                        <div style={clientImage}
                             className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={tatneft} alt="client"/>
                        </div>

                        <div style={clientImage}
                             className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={orgsintez} alt="client"/>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;