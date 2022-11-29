import React from 'react';
import {Link} from "react-router-dom";

const NavLinks = () => {
    return (
        <div className='navLinks'>
                <Link className='link' to='/'>Главная</Link>
                <Link className='link' to='/result'>Результаты</Link>
                <Link className='link' to='/contacts'>Контакты</Link>
        </div>
    );
};

export default NavLinks;