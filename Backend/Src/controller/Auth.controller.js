import AuthModel from "../Model/Auth.js";
import bcrypt from "bcrypt"; 
import { createAccestoken , createRefreshtoken, readRefreshToken } from "../utils/Auth.utils.js";

export const registerUser = async(req, res)=>{

    try {

        const {name , email , password} = req.body
        

        const isUserAlreadyExist = await AuthModel.findOne({
            email
        })

        if(isUserAlreadyExist){
            return res.status(400).json({
                message : "User Already Exist",
                errors : [
                    {
                        feild : "email",
                        message : "User Already Exist with this Email"
                    }
                ]
            })
        }

        const hashpassword = await bcrypt.hash(password , 10)

        const user = await AuthModel.create({
            name,
            email,
            password : hashpassword
        })
          
        const accessToken = createAccestoken({
            userId : user._id,
            role : user.role
        })
        const refreshToken = createRefreshtoken({
            userId : user._id,
            role : user.role
        })

        res.cookie("refreshToken" , refreshToken , {
            httpOnly : true
        })

        const UPdatedUSer = await AuthModel.findByIdAndUpdate( user._id ,{
            refreshToken 
        })
        console.log(UPdatedUSer);
        

        res.status(201).json({
            message : "User Register Succesfully",
            data : {
                user : {
                    email : user.email,
                    name : user.name,
                    id : user._id
                }, accessToken : accessToken
            }
        })
        
    } catch (error) {  

        res.status(500).json({
            message : "Internal Server Error",
            error: error.message,
        })
     }
}


export const loginUSer = async(req , res )=>{

    try {
        
        const { email , password} = req.body

       const user = await AuthModel.findOne({
            email
        })

        if(!user){

            res.status(400).json({
                message : "Invalid Email or Password"
            })
        }
   
        const isPasswordValid = await bcrypt.compare(password , user.password)

        if(!isPasswordValid){

           return res.status(400).json({
                message: "Invalid email or Password"
            })
        }

        const accessToken = createAccestoken({
            userId : user._id ,
            role : user.role
        })

        const refreshToken = createRefreshtoken({
            userId : user._id ,
            role : user.role
        })

        await AuthModel.findOneAndUpdate( {
            email
        } , {
            refreshToken
        })

        res.cookie("refreshToken" , refreshToken , {
            httpOnly : true
        })


        res.status(201).json({
            message : "User Logged In Succesfully",
            data :{
                user : {
                    email : user.email,
                    id : user._id,
                    name : user.name,
                    role : user.role
                },accessToken
            }
        })

    } catch (error) {
       return res.status(500).json({
            message : "Internal Server Error",
            error : error.message,
        })

    }

}


export const refresh = async(req , res ) =>{
    
    
    const refreshToken = req.cookies.refreshToken


    if(!refreshToken){
        res.status(401).json({
            message : "Refresh Token is Required"
        })
    }

    try {
        
        const decoded = readRefreshToken(refreshToken) 

        const {userId , role} = decoded

        const user = await AuthModel.findById(userId)

        if (!user) {
        return res.status(401).json({
        message: "User not found"
        });
        }

        if(refreshToken != user.refreshToken){

            await AuthModel.findByIdAndUpdate(user._Id,{
            refreshToken : null
            })

           return res.status(401).json({
                message : "Refresh Token Mismatch"
            })
        }

       const accessToken = createAccestoken({
        userId , role
       })

       const newRefreshToken = createRefreshtoken({
        userId , role
       })

       await AuthModel.findByIdAndUpdate(userId , {
            refreshToken : newRefreshToken
       })

       res.cookie("refreshToken" , newRefreshToken , {
        httpOnly : true
       })


       res.status(200).json({
        message : "Token rotated SuccesFully",
        data : {
            user: {
                name : user.name,
                email : user.email,
            }, accessToken
        }
       })

    } catch (error) {
        
        return res.status(401).json({
            message : "Invalid Refresh Token"
        })
    }
} 

export const getMe = async(req, res) =>{

    const {userId , role } = req.user

    const user = await AuthModel.findById(userId)

    res.status(200).json({
        message : "User Data fetched Successfully",
        data : {
            user: {
                name : user.name,
                email : user.email,
                id : user._id
            }
        }
    })

}