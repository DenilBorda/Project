const Order = require('../Model/orderModel');
const Cart = require('../Model/cartModel');

exports.addOrder = async(req,res)=>{
    try {
        const cartItems = await Cart.find({user:req.user._id},).populate('product')

        const orderItem = await cartItems.map(items=>({
            product:items.product,
            Quantity:items.Quantity,
            price: items.product.Price
        }))
        const TotalAmount = await orderItem.reduce((total,items)=>total+(items.Quantity*items.price),0)

        const newOrder = await Order.create({
            user:req.user._id,
            items:orderItem,
            TotalAmount:TotalAmount
        })
        newOrder.save();
        res.status(201).json({newOrder,msg:'Order Placed'});

    } catch (error) {
        console.log(error);
        res.json({msg:'server error'})
    }
}

exports.getOrder = async(req,res)=>{
    try {
        const orders = await Order.find({user:req.user._id})
        res.json(orders) 

    } catch (error) {
        console.log(error)
        res.json({msg:'server error'})
    }
}

exports.cancelOrder = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.json({msg:'server error'})
    }
}
