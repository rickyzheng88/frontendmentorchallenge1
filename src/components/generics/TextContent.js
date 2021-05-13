import styled from 'styled-components';
import { veryDarkGrayishBlue } from '../../styles/variables';

const TextContentWrapper = styled.div`
    text-align: start;
    width: ${props => props.width};
`;

const Title = styled.h3`
    font-size: ${props => props.fontSize || '26px'};
    padding-bottom: ${props => props.paddingBottom || '25px'};
`;

const Parraph = styled.p`
    line-height: 1.8;
    color: ${props => props.color || veryDarkGrayishBlue};
    font-size: 14.5px;
    letter-spacing: 0.6px;
    padding-bottom: ${props => props.paddingBottom || '0'};
`;

const TextContent =  {
    Wrapper: TextContentWrapper,
    Title,
    Parraph
};

export default TextContent;