import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 pb-8" >
            <section data-aos="zoom-in-down">
                    <div className="py-8">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Услуги</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Мы поможем вам в с любым заказаом и тд </h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Токарные работу ЧПУ</h2>
                                    <p className="text-md font-medium">
                                        изготовление токарных деталей на универсальных станках и станках ЧПУ, любой сложности                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">фрезерные работы ЧПУ</h2>
                                    <p className="text-md font-medium">
                                        Фрезеровка деталей на универсальных, трех- координатных, пяти-координатных станках ЧПУ                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">электразионные работы на станках ЧПУ</h2>
                                    <p className="text-md font-medium">
                                        We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">круглая, плоская шлифовка</h2>
                                    <p className="text-md font-medium">
                                        Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">изготовление Прессформ, Оправок, штампов</h2>
                                    <p className="text-md font-medium">
                                        Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;