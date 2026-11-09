import {json, Router} from "express"
import { authentication } from "../middlewares/Auth.middleware.js"
import multer from "multer"
import { createProduct, DeleteProducts, listAllProducts, updateProducts } from "../controller/products.controller.js"
import { productValidator } from "../Validator/product.validator.js"

const upload = multer({storage : multer.memoryStorage()})


const router = Router()


router.post("/createProduct" , authentication , (req, res , next)=>{
   if(req.user.role != "seller"){
    return res.status(403).json({
        message : "User cannot create product",
    })
   }
   next()
} , upload.array("images"), (req, res, next)=>{

   try {
      req.body.price = JSON.parse(req.body.price)
      req.body.sizes = JSON.parse(req.body.sizes)
    next()
   } catch (error) {
     
     res.status(401).json({
        message : "Parsing issue",
        error : error.message
     })
   }

}, productValidator , createProduct )

router.get("/getAllProducts" , authentication , listAllProducts)

router.delete("/deleteProducts/:id" , authentication , DeleteProducts)

router.patch("/updateProducts/:id" , authentication , updateProducts)

export default router