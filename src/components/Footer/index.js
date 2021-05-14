import React from 'react';
import styled from 'styled-components';
import { veryDarkBlackBlue } from '../../styles/variables';
import Logo from '../generics/Logo';
import Container from '../generics/Container';
import MenuWrapper from './MenuWrapper';
import MenuItem from './MenuItem';

const Background = styled.div`
    background-color: ${veryDarkBlackBlue};
    border-radius: 0 90px 0 0;
`;

const Wrapper = styled.div`
    display: flex;
    color: #fff;
    padding: 65px 0;
    justify-content: space-between;
`;

const Footer = () => {
    return (
        <Background>
            <Container>
                <Wrapper>
                    <Logo>Blogr</Logo>
                    <MenuWrapper title='Product'>
                        <MenuItem>Overview</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Marketplace</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Integrations</MenuItem>
                    </MenuWrapper>
                    <MenuWrapper title='Company'>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Team</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Careers</MenuItem>
                    </MenuWrapper>
                    <MenuWrapper title='Connect'>
                        <MenuItem>Contact</MenuItem>
                        <MenuItem>Newsletter</MenuItem>
                        <MenuItem>LinkedIn</MenuItem>
                    </MenuWrapper>
                </Wrapper>
            </Container>
        </Background>
    )
};

export default Footer;