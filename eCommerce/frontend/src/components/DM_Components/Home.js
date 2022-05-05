import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    //Retrieve Product
    componentDidMount() {
        this.retrieveProducts();
    }

    retrieveProducts() {
        axios.get("/products/displayProducts").then((res) => {
            if (res.data.success) {
                this.setState({
                    products: res.data.existingProducts
                });
                console.log(this.state.products);
            }
        });
    }

    //delete function
    onDelete = (id) => {
        axios.delete(`/product/delete/${id}`).then((res) => {
            alert('Deleted Product Successfully');
            this.retrieveProducts();
        })
    }
    
    render() {
        return (
            <div>
                <h2>All Products</h2>
                <font size="2">
                <table class="table">
                
                    <thead>
                        <tr bgcolor="#A0CFEC">
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Original Title</th>
                            {/* <th scope="col">Product Price</th>
                            <th scope="col">Market Price</th>
                            <th scope="col">Brand Name</th>
                            <th scope="col">Warrant Year</th>
                            <th scope="col">Version</th>
                            <th scope="col">description</th>
                            <th scope="col">coverImage</th>
                            <th scope="col">Availability</th>
                            <th scope="col">AverageRating</th>
                            <th scope="col">OfferPrice</th>
                            <th scope="col">Version</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((products, index) => (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/product/display/${products._id}`} style = {{textDecoration:'none'}}> 
                            {products.productName}
                            </a>
                        </td>
                        <td>{products.quantity}</td>
                        <td>{products.originalTitle}</td>
                        {/* <td>{products.productPrice}</td>
                        <td>{products.marketPrice}</td>
                        <td>{products.brandName}</td>
                        <td>{products.warrantYear}</td>
                        <td>{products.version}</td>
                        <td>{products.description}</td>
                        <td>{products.coverImage}</td>
                        <td>{products.availability}</td>
                        <td>{products.averageRating}</td>
                        <td>{products.offerPrice}</td>
                        <td>{products.version}</td> */}
                        <td>
                            <a className="btn btn-warning" href={`/update/${products._id}`}>
                                <i className="far fa-edit"></i>&nbsp;
                            </a>
                            &nbsp;
                            <a className="btn btn-danger" onClick={()=>this.onDelete(products._id)}>
                                <i className="far fa-trash-alt"></i>&nbsp;
                            </a>
                        </td>
                    </tr>
                ))}
                    </tbody>
                </table>

                <button className="btn btn-success"> <a href="/save" style={{textDecoration:'none', color:'white'}}>Create Product</a></button>
                </font>

            </div>
        )
    }
}