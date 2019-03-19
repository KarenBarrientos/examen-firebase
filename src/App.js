import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar';
import ProductList from './componentes/ProductList';
import Details from './componentes/Details';
import Cart from './componentes/Cart/Cart';
import Default from './componentes/Default';
import {Switch, Route} from 'react-router-dom';
import Modal from './componentes/Modal';
import firebase from './config/config';

class App extends Component {

  componentDidMount() {
      // peces
      this.dbRefPeces = firebase.database().ref('/peces');
      this.dbCallbackPeces = this.dbRefPeces.on('value', (snap) => {
          console.log(snap.val());
      });
    }

  componentWillUnmount() {
      this.dbRefPeces.off('value', this.dbCallbackPeces);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Modal />
      </React.Fragment>
    );
  }
}

export default App;