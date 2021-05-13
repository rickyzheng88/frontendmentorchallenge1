import React from 'react';
import styled from 'styled-components';
import Container from '../generics/Container';
import backgroundImg from '../../images/bg-pattern-intro.svg';
import Header from '../Header';
import Title from './Title';
import Subtitle from './Subtitle';
import Button from '../generics/Button';

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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 16.875rem;
    margin: 0 auto;
`;

const Intro = () => {
    return (
        <Background>
            <CenteredContainer paddingTop='60px'>
                <Header/>
                <Title>A modern publishing platform</Title>
                <Subtitle>Grow your audience and build your online brand</Subtitle>
                <ButtonWrapper>
                    <Button padding='13px 20px'>Start for Free</Button>
                    <Button padding='13px 20px' transparent>Learn More</Button>
                </ButtonWrapper>
            </CenteredContainer>
        </Background>
    );
}

export default Intro;