const ProductModel = require('../models/productModel');

exports.getProducts = async(req, res, next) => {
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}

    const products = await ProductModel.find(query);
    //console.log("products:", products);

    res.json({
        success : true,
        message :"get product success",
        products
    })
}

exports.getSingleProduct = async (req, res, next) => {  
     try {
        const product = await ProductModel.findById(req.params.id)
    res.json({
        success : true,
        message :"get Single product success",
        product
    })
        
     } catch (error) {
        res.json({
            success : false,
            message :"Product not found"
        })
        
     } 
    
}