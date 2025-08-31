const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    name: String,
    address: String,
    createdAt: Date
})

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;