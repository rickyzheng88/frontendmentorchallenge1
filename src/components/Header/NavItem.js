import React from 'react'
import styled from 'styled-components';
import arrow from '../../images/icon-arrow-light.svg';
import { ubuntu } from '../../styles/variables';

const Item = styled.span`
    font-family: ${ubuntu};
    font-weight: 500;
    font-size: 15px;
    padding: 0.625rem;
    user-select: none;
`;

const Icon = styled.img`
    margin-left: 7px;
`;

const NavItem = ({ children }) => {
    return(
        <Item>
            { children }
            <Icon src={arrow} />
        </Item>
    );
}

export default NavItem;