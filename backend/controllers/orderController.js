const orderModel = require("../models/orderModel")
const productModel = require('../models/productModel');


exports.createOrder = async (req, res, next) => {
    
    const { name, address, items }  = req.body;    
    const amount = Number(items.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItems: items, amount, status, name, address})

    items.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })

    res.json({
        success : true,
        order
    })
}