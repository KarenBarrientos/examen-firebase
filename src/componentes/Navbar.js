import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
import Login from './Login';
import { logout } from '../config/auth';
import { firebaseAuth } from '../config/config';

export default class Navbar extends Component {
    state = {
        authed: false,
        loading: true
    };

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged(user => {
          if (user) {
            this.setState({
              authed: true,
              loading: false
            });
          } else {
            this.setState({
              authed: false,
              loading: false
            });
          }
        });
    }
    
    componentWillUnmount() {
        this.removeListener();
    }

    render() {

        const botonLogout = (
            <ButtonContainer onClick={logout}>
                <span className="ml-2 ">
                    <i className="fas fa-sign-out-alt" />
                </span>
                Logout
            </ButtonContainer>
        );

        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/3316548/animal_fish_fishes_icon_peixe_icon
                Creative Commons (Atribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk*/}

                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav aling-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link"> Peces</Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-5">
                    <ButtonContainer>
                        <span className="ml-2 ">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Carrito
                    </ButtonContainer>
                </Link>
                {this.state.authed ? botonLogout : <Login />}
                <span className="ml-5">
                    <i className="fas fa-search"></i>
                </span>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue2);
.nav-link{
color: var(--mainWhite) !important;
font-size: 2.0rem;
text-transform: capitalize ; 
}
            
`;