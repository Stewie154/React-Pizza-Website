import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './sidebarElements';
import { Link } from 'react-scroll';
const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <Link to="pizzas" smooth={true} duration={750}>
                    <SidebarLink onClick={toggle}>Pizzas</SidebarLink>
                </Link>
                <Link to="desserts" smooth={true} duration={750}>
                    <SidebarLink onClick={toggle}>Deserts</SidebarLink>
                </Link>
                <Link to="home" smooth={true} duration={750}>
                    <SidebarLink onClick={toggle}>Home</SidebarLink>
                </Link>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar;
