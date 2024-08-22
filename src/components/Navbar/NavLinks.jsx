import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ classes }) => {
    return (
        <div className="flex items-center">
            <HashLink className={`px-4 font-extrabold hover:text-blue-900 ${classes}`} smooth to="/#services">
                Услуги
            </HashLink>
            <HashLink className={`px-4 font-extrabold hover:text-blue-900 ${classes}`} smooth to="/#about">
                О нас
            </HashLink>
            <HashLink className={`px-4 font-extrabold hover:text-blue-900 ${classes}`} to="/contact#contact">
                Контакты
            </HashLink>
            <div className="flex flex-col items-center justify-center px-4">
                <HashLink className={`font-extrabold hover:text-blue-900 ${classes}`} to="/">
                    +79061121703
                </HashLink>
                <HashLink className={`font-extrabold hover:text-blue-900 ${classes}`} to="/">
                    +79872711206
                </HashLink>
            </div>
        </div>
    );
}

export default NavLinks;
