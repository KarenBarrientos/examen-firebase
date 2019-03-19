import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';

export default class ListaCachorros extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center bg-dark">
                                            <h5 className="text-info">Pez agregado</h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5 className="text-white">{title}</h5>
                                            <h5 className="text-light">Precio: Lps.{price}
                                            </h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Continuar comprando
                                        </ButtonContainer>
                                            </Link>

                                            <Link to="/cart">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Ir al carrito
                                        </ButtonContainer>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    };

                }}
            </ProductConsumer>

        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,1.0);
display: flex;
aling-items: center;
justify-content: center;
#modal{
    background: var(--mainRed);
    color: var(--mainBlue);
}
`;