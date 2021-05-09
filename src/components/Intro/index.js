import React from 'react';
import styled from 'styled-components';
import { Container } from '../generics/Container';
import backgroundImg from '../../images/bg-pattern-intro.svg';
import Header from '../Header';
import Title from './Title';

const Background = styled.section`   
    content: "";
    height: 34.375rem;
    width: 100%;
    background-image: linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    border-radius: 0 0 0 6rem;
    position: relative;
    color: #fff;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        height: 34.375rem;
        width: 100%;
        background-image: url(${backgroundImg});
        background-size: 175rem 175rem;
        background-repeat: no-repeat;      
        background-position: 26% 53%;
    }
`;

const CenteredContainer = styled(Container)`
    text-align: center;
    position: relative;
`;

const Intro = () => {
    return (
        <Background>
            <CenteredContainer paddingTop='60px'>
                <Header/>
                <Title>A modern publishing platform</Title>
            </CenteredContainer>
        </Background>
    );
}

export default Intro;