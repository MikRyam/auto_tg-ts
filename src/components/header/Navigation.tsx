import React, {FC, useState} from 'react';
import NavMenu from "./NavMenu";
import {MenuOutlined} from "@ant-design/icons";
import NavLogo from "./NavLogo";
import {Drawer} from "antd";
import NavLinks from "./NavLinks";

const Navigation: FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    return (
        <>
            <div className='navigation menuIcon'>
                <NavLogo/>
                <MenuOutlined
                    style={{color: '#202124', fontSize: '32px'}}
                    onClick={() => {
                        setOpenMenu(true)
                    }}
                />
            </div>
            <NavMenu/>
            <Drawer title="Меню" 
                    placement="right" 
                    onClose={() => {setOpenMenu(false)}} 
                    open={openMenu}
                    headerStyle={{padding: '16px 30px'}}
            >                
                <NavLinks/>
            </Drawer>
        </>
    );
};

export default Navigation;