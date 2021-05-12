import React from 'react';
import styled from 'styled-components';
import { Container } from '../generics/Container';
import { veryDarkBlue } from '../../styles/variables';
import Title from './Title';
import backgroundImg from '../../images/illustration-editor-desktop.svg';
import TextContent from '../generics/TextContent';

const Background = styled.div`
    color: ${veryDarkBlue};
    text-align: center;
    height: 56.25rem;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: 53.125rem;
    background-position: 150% 3.75rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 510px;
`;

const FirstContent = () => {
    return (
        <Background>
            <Container paddingX='8.4375rem'>
                <Title>Designed for the future</Title>
                <ContentWrapper>
                    <TextContent.Wrapper>
                        <TextContent.Title>Introducing an extensible editor</TextContent.Title>
                        <TextContent.Parraph paddingBottom='4.0625rem'>
                            Blog features an exceedingly intuitive interface which lets you focus
                            on one thing: creating content. The editor supports management of
                            multiple blogs and allows easy manipulation of embeds such as images,
                            videos, and Markdown. Extensibility with plugins and themes provide
                            easy ways to add functionality or change the looks of a blog.
                        </TextContent.Parraph>                        
                    </TextContent.Wrapper>

                    <TextContent.Wrapper>
                        <TextContent.Title>Robust content management</TextContent.Title>
                        <TextContent.Parraph paddingBottom='4.0625rem'>
                            Flexible content management enables users to easily move through
                            posts. Increase the usability of your blog by adding customized
                            categories, sections, format, or flow. With this functionality, you're in
                            full control.
                        </TextContent.Parraph>
                    </TextContent.Wrapper>
                </ContentWrapper>
            </Container>
        </Background>
        
    );
};  

export default FirstContent;