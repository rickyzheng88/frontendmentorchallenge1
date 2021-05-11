import styled from 'styled-components';
import { veryDarkGrayishBlue } from '../../styles/variables';

const TextContentWrapper = styled.div`
    text-align: start;
`;

const Title = styled.h3`
    font-size: 26px;
    padding-bottom: 25px;
`;

const Parraph = styled.p`
    line-height: 1.8;
    color: ${veryDarkGrayishBlue};
    font-size: 14.5px;
    letter-spacing: 0.6px;
    padding-bottom: ${props => props.paddingBottom || '0'};
`;

const TextContent = ({ children, title, paddingBottom }) => {
    return (
        <TextContentWrapper>
            <Title>{title}</Title>
            <Parraph paddingBottom={paddingBottom}>{children}</Parraph>
        </TextContentWrapper>
    );
};

export default TextContent;