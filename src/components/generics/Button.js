import styled from 'styled-components';
import { lightRed, veryLightRed } from '../../styles/variables';

const Button = styled.button`
    border: 1px solid #fff;
    border-radius: 40px;
    padding: ${props => props.padding || '13px 37px'};
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.transparent ? '#fff' : lightRed};
    background-color: ${props => props.transparent ? 'transparent' : '#fff'};
    cursor: pointer;
    transition: 0.15s all ;

    &:hover {
        background-color: ${props => props.transparent ? '#fff' : veryLightRed};
        border-color: ${props => props.transparent ? '#fff' : veryLightRed};
        color: ${props => props.transparent ? lightRed : '#fff'}
    }
`;

export default Button;