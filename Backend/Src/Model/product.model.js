import mongoose from "mongoose"


const ProductSchema = mongoose.Schema({
    title: {
        type:String,
        required : true,
        minLength : 2 ,
        maxLength : 100,
    },
    description:{
        type : String,
        required : true,
        minLength : 10 ,
        maxLength : 200,
    }, price : {
        amount : {
            type : Number,
            required : true
        },
        currency : {
            type : String,
            enum : ["INR" , "USD"],
            default : "INR"
        }
    },
    images:{
            type :[ 
                String,
            ] ,
        validate : {
            validator : (images) => images.length <= 5,
            message : "A Products can have at most 5 images"
        },
},
        
    sizes: [
        {
            size: {
                type : String,
                enum : ["XS", "S", "M", "L", "XL", "XXL"],
                required : true
            },
            stock :{
                type : String,
                min : 0,
                default : 0
            }
        }
    ],
    seller:{
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    }
})

const productModel = mongoose.model("products" , ProductSchema)
export default productModel
