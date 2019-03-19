import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {

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
                    <span className="ml-5">
                        <i className="fas fa-search"></i>
                    </span>
                </Link>
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