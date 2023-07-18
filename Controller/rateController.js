const Rate = require('../Model/rateModel');
const User = require('../Model/userModel');
exports.addRate = async(req,res)=>{
    try {
        const productId = req.params.id;
        const{Rates,Description} = req.body;

        const user = await User.findById(req.user._id);

        const newRate = await Rate.create({
            product:productId,
            user:user._id,
            Rates,
            Description
        })
        
        newRate.save();
        res.status(201).json({newRate,msg:'Rate Added'});

    } catch (error) {
        console.log(error)
        res.json({msg:'server error'})
    }

}

exports.getRate = async(req,res)=>{
    try {
        const rates = await Rate.find({user:req.user._id});
        res.json(rates); 
    } catch (error) {
        console.log(error)
        res.json({msg:'server error'})
    }
 
}