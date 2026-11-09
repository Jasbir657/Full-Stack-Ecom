import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    products : [
       {
         product: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "products",
            required : true,
         },
         quantity :{
            type : Number,
            default : 1,
            min : 1
         },
         sizes : {
            type : mongoose.Schema.Types.ObjectId,
            enum: ["XS", "S", "M","L" , "XL", "XXL"]
         }
       }
    ],
    user :{
    type: mongoose.Schema.Types.ObjectId,
    ref : "user",
    required : true, 
}
})

const cartModel = mongoose.model("cart" , cartSchema)
export default cartModel 