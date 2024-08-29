import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ classes, onContactClick }) => {
    return (
        <div className="flex items-center">
            <HashLink className={`px-4 font-extrabold hover:text-blue-900 ${classes}`} smooth to="/#services">
                Услуги
            </HashLink>
            <HashLink className={`px-4 font-extrabold hover:text-blue-900 ${classes}`} smooth to="/#about">
                О нас
            </HashLink>
            <button onClick={onContactClick} className={`px-4 font-extrabold hover:text-blue-900 ${classes}`}>
                Контакты
            </button>
            <a href="tel:+79061121703" className={`font-extrabold hover:text-blue-900 ${classes}`}>
                +79061121703
            </a>
        </div>
    );
}

export default NavLinks;
