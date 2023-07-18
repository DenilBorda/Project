const Favourite = require('../Model/favouriteModel');
const User = require('../Model/userModel');

exports.addToFavourite = async(req,res)=>{
    try {
        const productId = req.params.id;

        const user = await User.findById(req.user._id)
    
        const newFavourite = await Favourite.create({
            user:user._id,
            product:productId
        })
    
        newFavourite.save();
        res.status(201).json({newFavourite,msg:'Product Add To Favourite'})
        
    } catch (error) {
        console.log(error)
        res.json({msg:'server error'})
    }

}

exports.getFavourite = async(req,res)=>{
    try {
        const user = await Favourite.find({user:req.user._id})
        res.json(user)
    } catch (error) {
        console.log(error)
        res.json({msg:'server error'})
    }
}