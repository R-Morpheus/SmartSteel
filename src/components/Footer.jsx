import React from 'react';
import { HashLink } from 'react-router-hash-link';
import telegram from '../images/telegram.svg';
import whatsapp from '../images/whatsapp.svg';
import mail from '../images/mail.svg';
import phone from '../images/phone.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    <div className="flex flex-col lg:flex-row gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                        {/* Первый блок */}
                        <div className="flex-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">Ссылки</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="/#about"
                                              className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                        О нас
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/#services"
                                              className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                        Услуги
                                    </HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* Второй блок */}
                        <div className="flex-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">Контакты и социальные сети.</h6>
                            <ul className="text-md">
                                <li className="mb-2 flex">
                                    <img className='w-6 h-6 mr-1' src={phone} alt="phone"/>
                                    <a href="tel:+79061121703">+7 (962) 564-21-55</a>
                                </li>
                                {/*<li className="mb-2 flex">*/}
                                {/*    <img className='w-6 h-6 mr-1' src={telegram} alt="telegram"/>*/}
                                {/*    <a href="https://t.me/safbrk" target="_blank"*/}
                                {/*       rel="noopener noreferrer">https://t.me/safbrk</a>*/}
                                {/*</li>*/}
                                <li className="mb-2 flex">
                                    <img className='w-6 h-6 mr-1' src={whatsapp} alt="whatsapp"/>
                                    <a href="https://wa.me/79061121703" target="_blank" rel="noopener noreferrer">+7 (962) 564-21-55</a>
                                </li>
                                <li className="mb-2 flex">
                                    <img className='w-6 h-6 mr-1' src={mail} alt="e-mail"/>
                                    <a href="mailto:steel-smart@gmail.com">steel-smart@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{" "}
                                <HashLink to="#" className=" hover:text-gray-900">
                                    СмартСталь
                                </HashLink>. Все права защищены.
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
