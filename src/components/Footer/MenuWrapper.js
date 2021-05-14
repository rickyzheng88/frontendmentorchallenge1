import styled from 'styled-components';
import { ubuntu } from '../../styles/variables';

const Wrapper = styled.div`
    font-family: ${ubuntu};
    display: flex;
    flex-direction: column;
    width: 150px;
`;

const Title = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 35px;
`;

const MenuWrapper = ({ children, title }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {children}
        </Wrapper>
    )
};

export default MenuWrapper;