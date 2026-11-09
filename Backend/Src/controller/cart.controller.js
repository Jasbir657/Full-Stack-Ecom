import mongoose from "mongoose";
import cartModel from "../Model/cart.model.js";

// cart {productId , quantity , sizes} = req. body
// authenticate kro fir 
// validate the data which will be recived from the frntend
// 
export async function addToCart (req , res) {

const { productId , qunatity , sizes} = req.body

   try {

     const product = await cartModel.findbyId(productId)    

    if(!product) {
        return res.status(404).json({
            message : "Product Not Found",
        })
    }

    const Selectedsize = product.sizes.find(s => s.size == size)

    if(!Selectedsize){
        res.status(404).json({
            message : "Invalid Size",
        })
    }

    if(Selectedsize.stock < qunatity){

        res.status(400).json({
            message : "Stock is not available"
        })
    }

    const cart = await cartModel.findOne({user : req.user.userId})?? 
    (await cartModel.create({user:req.user.userId}))

    const productInCart = cart.product.find((p => p.product.toString() === productId))

    if((productInCart.qunatity + qunatity > Selectedsize.stock)){

        res.status(400).json({
            message : "Insufficent Stock",
        })
    }

    await cartModel.updateOne({
        user : req.user.userId,
        "products.product" : productId,
        "products.size" : sizes
    },
    {
        $inc : {
            "products.$.qunatity" : qunatity
        }
    }
)
   } catch (error) {

    return res.status(400).json({
        message : "Invalid request",
        
    })
   }
}

export async function getCart (req , res ) {

    const cart = (await cartModel.findOne({user : req.user.userId })) ??
     (await cartModel.create({user : req.user.userId}))

     res.status(201).json({
        message : " Retrived Cart",
        data : {
            cart : cart
        }
     })
}