import {body , validationResult} from "express-validator"

export const cartValidation = [

    body("productId")
    .exists().withMessage("ProductId is required").bail()
    .isMongoId().withMessage("The Id must be a Mongo ID").bail()
    .isString().withMessage("The id must be a String"),
    body("quantity")
    .exists().withMessage("Quantiy is required").bail()
    .isInt({min: 1}).withMessage("Quantity must be Integer and minimun should be 1").bail(),
    body("sizes")
    .exists().withMessage("Size is required").bail()
    .isIn(["XS", "S","M","L", "XL","XXL"]).withMessage("Sies can be only XS S M L XL XXL").bail()
    .isString().withMessage("Sizes can only be string"),

    (req, res , next) => {

        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                message : "Invalid Reques",
                error : error.message
            })
        }
        
        next()
    }
]