import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    align-items: ${props => props.alignItems};
    flex-direction: column;
    justify-content: center;
`;

export default ContentWrapper;