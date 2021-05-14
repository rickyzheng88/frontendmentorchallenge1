import React from 'react';
import styled from 'styled-components';
import Container from '../generics/Container';
import TextContent from '../generics/TextContent';
import ContentWrapper from '../generics/ContentWrapper';
import backgroundImg from '../../images/illustration-laptop-desktop.svg';

const Background = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: -16.25rem 6.5625rem;
    background-size: 57.5rem;
`;

const ThirdContent = () => {
    return (
        <Background>
            <Container paddingX='290px'>
                <ContentWrapper alignItems='flex-end'>
                    <TextContent.Wrapper width='500px'>
                        <TextContent.Title>Free, open, Simple</TextContent.Title>
                        <TextContent.Parraph paddingBottom='65px'>
                            Blogr is a free open source application backed by a large
                            community of helpful developers. It supports features such as code
                            highlighting, Rss feeds, social media integration, third-party
                            commenting tools, and works seamlessly with Google Analytics. The
                            architecture is clean and is relatively ease to learn.
                        </TextContent.Parraph>
                    </TextContent.Wrapper>

                    <TextContent.Wrapper width='500px'>
                        <TextContent.Title>Powerful tooling</TextContent.Title>
                        <TextContent.Parraph>
                            Batteries included. We built a simple and straightfoward CLI tool that
                            makes customization and deployment a breeze, but capable of
                            producing even the most complicated sites.
                        </TextContent.Parraph>
                    </TextContent.Wrapper>
                </ContentWrapper>
            </Container>
        </Background>
    );
};

export default ThirdContent;