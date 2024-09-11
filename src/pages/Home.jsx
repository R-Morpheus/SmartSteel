import React, { useState } from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Modal from "../components/Modal";
import telegram from '../images/telegram.svg';
import whatsapp from '../images/whatsapp.svg';
import phone from '../images/phone.png';
import mail from '../images/mail.svg';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Hero handleOpenModal={handleOpenModal} />
            <Services />
            <Clients />
            <About handleOpenModal={handleOpenModal} />
            <Footer />

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2 className="text-xl font-bold mb-4">Контакты</h2>
                <div className='flex mb-2'>
                    <img className='w-6 h-6 mr-1' src={phone} alt="phone"/>
                    <a href="tel:+79061121703">+7 (962) 564-21-55</a>
                </div>
                {/*<div className='flex mb-2'>*/}
                {/*    <img className='w-6 h-6 mr-1' src={telegram} alt="telegram"/>*/}
                {/*    <a href="https://t.me/safbrk" target="_blank" rel="noopener noreferrer">https://t.me/safbrk</a>*/}
                {/*</div>*/}
                <div className='flex mb-2'>
                    <img className='w-6 h-6 mr-1' src={whatsapp} alt="whatsapp"/>
                    <a href="https://wa.me/79061121703" target="_blank" rel="noopener noreferrer">+7 (962) 564-21-55</a>
                </div>
                <div className='flex mb-2'>
                    <img className='w-6 h-6 mr-1' src={mail} alt="e-mail"/>
                    <a href="mailto:steel-smart@gmail.com">steel-smart@gmail.com</a>
                </div>
            </Modal>
        </>
    );
};

export default Home;
