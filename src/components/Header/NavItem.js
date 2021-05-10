import React, { useState } from 'react'
import styled from 'styled-components';
import arrow from '../../images/icon-arrow-light.svg';
import { ubuntu } from '../../styles/variables';
import Menu from './Menu';

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

const NavItem = ({ children, items }) => {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    if (active) {
        return (
            <Item onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                { children }
                <Icon src={arrow} />
                <Menu items={items}></Menu>
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