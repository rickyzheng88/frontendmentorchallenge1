import React from 'react';
import styled from 'styled-components';
import image from '../../images/bg-pattern-circles.svg';
import phoneImage from '../../images/illustration-phones.svg';
import { Container } from '../generics/Container';
import TextContent from '../generics/TextContent';

const Background = styled.div`
    position: relative;
    height: 23.125rem;
    border-radius: 0 5.625rem 0 5.625rem;
    background-color: #3b3c5b;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: 56.25rem;
    background-position: -11.5625rem -27.5rem;

    &::before {
        content: "";
        background-image: url(${phoneImage});
        background-repeat: no-repeat;
        background-size: 518px;
        position: absolute;
        width: 30rem;
        height: 30.4375rem;
        top: -4.3125rem;
        left: 7.0625rem;
    }
`;

const ContentWrapper = styled.div`
    color: #fff;
    width: 500px;
`;

const FlexEndContainer = styled(Container)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 23.125rem;
`;

const SecondContent = () => {
    return (
        <Background>
            <FlexEndContainer>
                <ContentWrapper>
                    <TextContent.Wrapper>
                        <TextContent.Title fontSize='35px'>State of the Art Infrastructure</TextContent.Title>
                        <TextContent.Parraph color='#fff'>
                            With reliability and speed in mind, worldwide data centers provide the
                            backbone for ultra-fast connectivity. This ensures your site will load
                            instantly, no matter where your readers are, keeping your site
                            competitive.
                        </TextContent.Parraph>
                    </TextContent.Wrapper>
                </ContentWrapper>
            </FlexEndContainer>
        </Background>
    );
}

export default SecondContent;