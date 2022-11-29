import React from 'react';
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

const NavMenu = () => {
    return (
        <nav className='navigation navigationMenu'>
            <NavLogo/>
            <NavLinks/>
        </nav>
    );
};

export default NavMenu;