import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeCart from './components/SK_Components/HomeCart';
import CartDetails from './components/SK_Components/CartDetails';
import MyCart from './components/SK_Components/MyCart';
import Footer from './components/SK_Components/Footer';


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div >
           
            </div>
                <div className="container">
                
                    <Route path="/" exact component={HomeCart}></Route>
                    <Route path="/MyCart" component={MyCart}></Route>
                  <Route path="/cart/display/:id" exact component={CartDetails} />
                  <Footer/>
                    
                </div>            
            </BrowserRouter>
        )
    }
}