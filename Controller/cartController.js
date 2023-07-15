const Cart = require("../Model/cartModel");
const User =  require('../Model/userModel')
const Product =  require('../Model/productModel')

exports.addToCart = async (req, res) => {
  try {
    const {product,Quantity} = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
        return res.json({ msg: "User Not Found" });
    }
    const products = await Product.findById(product);
    if (!products) {
      return res.json({ msg: "Product Not Found" });
    }

    const newCart = await Cart.create({
      user: user._id,
      product,
      Quantity,
    });

    newCart.save();
    res.status(201).json({ newCart, msg: "Product AdsToCart..." });
  } catch (error) {
    console.log(error);
    res.json({ msg: "server error" });
  }
};

exports.getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.json({msg: "User Not Found"});
    }
    const List = await Cart.find({user:user._id});
    res.json(List);
  } catch (error) {
    console.log(error);
    res.json({ msg: "server error" });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findById(id);
    if (!cart) {
      return res.json({ msg: "Cart Not Found " });
    }
    const updatedCart = await Cart.findByIdAndUpdate(cart._id,{ $set: req.body },{ new: true });
    updatedCart.save();
    res.status(200).json({ updatedCart, msg: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "server error" });
  }
};

exports.deleteCart = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = Cart.findById(id);
        if(!cart){
            return res.json({msg:'Cart Not Found'});
        }
        const updatedCart = await Cart.findByIdAndDelete(cart._id);
        res.json({msg:'Cart Deleted'});
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
};
