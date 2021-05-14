import styled from 'styled-components';
import Logo from '../generics/Logo';
import Nav from './Nav';
import NavItem from './NavItem';
import Button from '../generics/Button';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ListNavItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20.3125rem;
`;

const ButtonGroup = styled.div`
    align-items: center;
`;

const LoginButton = styled(Button)`
    border: none;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <Nav>
                <Logo>Blogr</Logo>
                <ListNavItem>
                    <NavItem
                    items={[
                        {title: 'New'},
                        {title: 'Hot Sales'},
                        {title: 'Good prices'}
                    ]}
                    >
                        Product
                    </NavItem>
                    <NavItem
                    items={[
                        {title: 'About Us'}
                    ]}
                    >
                        Company
                    </NavItem>
                    <NavItem
                    items={[
                        {title: 'Contact'},
                        {title: 'Newsletter'},
                        {title: 'LinkedIn'}
                    ]}
                    >
                        Connect
                    </NavItem>
                </ListNavItem>
            </Nav>
            <ButtonGroup>
                <LoginButton transparent>Login</LoginButton>
                <Button>Sign Up</Button>
            </ButtonGroup>
        </HeaderContainer>
    );
};

export default Header;