const mongoose = require('mongoose');

const cartItemsModelSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },


    productId: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    productImage: {
        type: String,
        required: false
    },
    productPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    subTotal: {
        type: String,
    },
    taxPrice: {
        type: String,
    },
    shippingPrice: {
        type: String,
    },
    totalPrice: {
        type: String,
    },







});

module.exports = mongoose.model('Cart', cartItemsModelSchema);