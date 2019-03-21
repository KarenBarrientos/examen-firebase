import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import { logout } from '../config/auth';
import { firebaseAuth } from '../config/config';


export default class ProductList extends Component {
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
        const listado = (
            <div className="container">
                <Title name="Nuestros " title=" Peces" />
                <div className="row">
                    <ProductConsumer>
                        {value =>{
                            return value.products.map(product =>{
                                return <Product key= {product.id} product={product}/>;
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        );

        return (
            <React.Fragment>
                <div className="py-5">
                {this.state.authed ? listado : `Debe autenticarse`}
                </div>
            </React.Fragment>
        );
    }
}