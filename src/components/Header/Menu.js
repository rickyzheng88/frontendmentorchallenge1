import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #fff;
    position: absolute;
    border-radius: 4px;
    padding: 20px 0;
    top: 45px;
    left: -15px;
`;

const MenuItem = styled.span`
    color: #000;
    font-size: 13px;
    font-weight: 400;
    padding: 8px 25px;
    padding-right: 50px;
    width: 100%;
    text-align: start;
    white-space: nowrap;

    &:hover {
        font-weight: 700;
    }
`;

const Menu = ({ items }) => {
    return (
        <MenuWrapper>
            {
                items.map((item, i) => {
                    return (
                        <MenuItem 
                        ref={item.ref}
                        key={i}>
                            {item.title}
                        </MenuItem>
                    )
                })
            }
        </MenuWrapper>
    );
};

export default Menu;