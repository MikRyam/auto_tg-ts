import React from 'react';
import {Link} from "react-router-dom";
import {CarOutlined} from "@ant-design/icons";

const NavLogo = () => {
    return (
        <div className='logo'>
            <Link className='link' to='/' style={{fontWeight: 'bold'}}>
                <CarOutlined style={{fontWeight: 'bold', fontSize: '30px', color: 'teal', marginRight: '20px'}}/>
            </Link>
            <Link className='link' to='/' style={{color: 'teal', fontSize: '20px', fontWeight: 'bold'}}>АВТО</Link>
        </div>
    );
};

export default NavLogo;