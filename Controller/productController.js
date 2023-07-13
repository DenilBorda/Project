const Product = require('../Model/productModel');

exports.addProduct = async(req,res)=>{
    try {
    const{Title,Decription,Image,Price} = req.body;
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
    res.status(201).json({newProduct,msg:'Product Added'});
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
    
};

exports.getAllProduct = async(req,res)=>{
   try {
        const product = await Product.find();
        res.status(200).json(product)
   } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
   }
};

exports.getProduct = async(req,res)=>{
    try {

        const id = await req.params.id;
        const product = await Product.findById(id);
        if(!product){
            res.json({msg:'Product Not Found'});
        }
        res.json(product)   
    } catch (error) {
       console.log(error);
       res.json({msg:'server error'}); 
    }
};

exports.updateProduct = async(req,res)=>{
    try {
        const id = await req.params.id;
        const product = await Product.findById(id);
        if(!product){
            res.json({msg:'Product Not Found'});
        }
        const updatedProduct  = await Product.findByIdAndUpdate(product._id,{$set:req.body},{new:true});
        updatedProduct.save();
        res.status(200).json({updatedProduct,msg:'Product Updated'});
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'}); 
    }
};

exports.deleteProduct = async(req,res)=>{
    try {
        const id = await req.params.id;
        const product = await Product.findById(id);
        if(!product){
            res.json({msg:'Product Not Found'});
        }
        const deletedProduct = await Product.findByIdAndDelete(product._id);
        res.status(200).json({msg:'Product Deleted'});
    } catch (error) {
        console.log(error)
        res.json({msg:'server error'});
    }
    
};