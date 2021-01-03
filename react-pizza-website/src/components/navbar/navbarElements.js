import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav `
    position: fixed;
    top: 0;
    width: 100%;
    background: #150f0f;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border-bottom: 1px solid gold;
`
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 414px) {
        
        display: none;
    }
`
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }

    @media screen and (max-width: 414px) {
        position: static;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        p {
            display: none;
        }
    }

`
export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
    transition: 0.2s ease-in-out;

    &:hover {
        color: yellow;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 414px) {
        margin-left: 50px;
        margin-top: 10px;
    }
`