const Product = require('../Model/productModel');

exports.addProduct = async(req,res)=>{
    try {
        const{Title,Decription,Image,Price}=req.body
    const product = await Product.findOne({Title});
    if(product){
        return res.json({msg:'Product Already Exist'});
    }

    const newProduct = await Product.create({
        Title,
        Decription,
        Image,
        Price
    });
    newProduct.save();
    res.status(201).json({msg:'Product Added'});
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
    
};

exports.getAllProduct = async(req,res)=>{
    
};

exports.getProduct = async(req,res)=>{

};

exports.updateProduct = async(req,res)=>{

};

exports.deleteProduct = async(req,res)=>{

};