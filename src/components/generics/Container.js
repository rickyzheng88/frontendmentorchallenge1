import styled from 'styled-components';

const Container = styled.div`
    max-width: 65.625rem;
    margin: 0 auto;
    padding: ${props => props.paddingX ? `${props.paddingX} 0` : '0 0'};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    
`;

export default Container;