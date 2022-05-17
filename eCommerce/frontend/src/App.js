import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/DM_Components/NavBar'
import Home from './components/DM_Components/Home';
import CreateProducts from './components/DM_Components/CreateProducts'
import EditProducts from './components/DM_Components/EditProducts';
import ProductDetails from './components/DM_Components/ProductDetails';

//Import product add components
import ProductAdd from './components/DM_Components/ProductAdd';
import BooksAdd from './components/DM_Components/ProductsAdd/BooksAdd';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div >
            <NavBar/>
            </div>
                <div className="container">
                    <Route path="/" exact component = {ProductAdd}></Route>
                    <Route path="/productList" component = {Home}></Route>
                    <Route path="/save" component = {CreateProducts}></Route>
                    <Route path="/update/:id" component = {EditProducts}></Route>
                    <Route path="/display/:id" component = {ProductDetails}></Route>
                    
                    {/* Routes for product add components */}
                    <Route path="/display/booksAdd" component = {BooksAdd}></Route>
                </div>            
            </BrowserRouter>
        )
    }
}