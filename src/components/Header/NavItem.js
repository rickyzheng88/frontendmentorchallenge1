import React, { useState } from 'react'
import styled from 'styled-components';
import arrow from '../../images/icon-arrow-light.svg';
import { ubuntu } from '../../styles/variables';

const Item = styled.span`
    font-family: ${ubuntu};
    font-weight: 500;
    font-size: 15px;
    padding: 0.625rem;
    user-select: none;
    cursor: pointer;
    position: relative;
`;

const Icon = styled.img`
    margin-left: 7px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: absolute;
    width: 80px;
    height: 100px;
    border-radius: 5px;
`;

const NavItem = ({ children }) => {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    if (active) {
        return (
            <Item onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                { children }
                <Icon src={arrow} />
                <Menu></Menu>
            </Item>
        );
    }

    return(
        <Item onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            { children }
            <Icon src={arrow} />
        </Item>
    );
}

export default NavItem;