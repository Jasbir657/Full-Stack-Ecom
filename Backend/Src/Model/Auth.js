import mongoose from "mongoose"

const AuthSchema = new mongoose.Schema({
        name:{
            type:String,
            required : true,
        },
        email:{
            type : String,
            required : true,
            unique : true      
        },
        password:{
          type : String,
          required : true
        },
        role :{
          type : String ,
          default : "user",
          enum : ["user" , "Seller"],
        },
        refreshToken : {
            type : String,
        }
    })

const AuthModel = mongoose.model("User" , AuthSchema)
export default AuthModel