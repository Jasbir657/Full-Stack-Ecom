import { readAccessToken } from "../utils/Auth.utils.js";

export  function authentication (req , res , next){

    const accessToken = req.headers.authorization?.split(" ")[1]

    if(!accessToken){
       return res.status(400).json({
            message : "Access Token not found in headers"
        })
    }

    try {
        
        const decoded = readAccessToken(accessToken)

        req.user = decoded

        next()

    } catch (error) {
        return res.status(400).json({
            message : "Invalid or expire AcsessToken"

        })
    }

}