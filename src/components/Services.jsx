import React from 'react';
import press from '../images/press-form.jpg';
import tokar from '../images/tokar.jpg';
import frezer from '../images/frezer.jpg';
import electro from '../images/electro.jpg';
import shlif from '../images/shlif.jpg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 pb-8" >
            <section data-aos="zoom-in-down">
                    <div className="py-8">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Услуги</h2>

                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Мы осуществим заказ любой сложности. </h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div
                                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img"
                                         className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                         src={press}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Изготовление пресс-форм,
                                        оправок, штампов</h2>
                                    <p className="text-md font-medium">
                                        Мы предлагаем профессиональные услуги по изготовлению прессформ, оправок и
                                        штампов. Наша компания специализируется на разработке и производстве
                                        высокоточных инструментов, необходимых для серийного производства деталей в
                                        различных отраслях промышленности. Мы работаем с широким спектром материалов и
                                        используем современное оборудование, что позволяет нам гарантировать высочайшее
                                        качество и точное соответствие требованиям заказчиков. </p>
                                </div>
                            </div>
                            <div
                                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img"
                                         className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                         src={tokar}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center">Токарные работу ЧПУ</h2>
                                    <p className="text-md font-medium">
                                        Мы предлагаем услугу токарных работ на станках с числовым программным
                                        управлением (ЧПУ). Эта услуга включает в себя высокоточное изготовление и
                                        обработку деталей из металлов и других материалов с помощью современных токарных
                                        станков ЧПУ. Наше оборудование позволяет создавать сложные формы и выполнять
                                        детали с высокой точностью, что критически важно для проектов, требующих
                                        строгого соответствия чертежам и спецификациям.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img"
                                         className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                         src={frezer}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center">Фрезерные работы ЧПУ</h2>
                                    <p className="text-md font-medium">
                                        Мы предлагаем услугу фрезерных работ на станках с числовым программным
                                        управлением (ЧПУ). Эта услуга включает в себя высокоточную обработку деталей из
                                        различных материалов, таких как металлы, сплавы, пластик и композиты, с
                                        использованием современных фрезерных станков ЧПУ. Наше оборудование позволяет
                                        создавать сложные изделия с высокой точностью и качеством поверхности, что
                                        необходимо для выполнения самых требовательных проектов.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img"
                                         className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                         src={electro}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Электроэрозионная обработка ЧПУ</h2>
                                    <p className="text-md font-medium">
                                        Мы предоставляем услугу электроэрозионной обработки на станках с числовым
                                        программным управлением (ЧПУ), которая включает в себя высокоточное изготовление
                                        и обработку деталей с использованием метода электроэрозии. Этот метод позволяет
                                        эффективно обрабатывать материалы высокой твердости, такие как закалённые стали,
                                        титановые сплавы и карбиды, обеспечивая при этом исключительную точность и
                                        качество поверхности.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img"
                                         className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                         src={shlif}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Круглая, плоская
                                        шлифовка</h2>
                                    <p className="text-md font-medium">
                                        Мы предлагаем услуги круглой и плоской шлифовки для точной обработки
                                        металлических и неметаллических деталей. Эти методы шлифовки позволяют достигать
                                        высокой точности размеров, качественной поверхности и идеального соответствия
                                        требуемым параметрам.
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