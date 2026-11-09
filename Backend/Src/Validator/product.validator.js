import {body, validationResult} from "express-validator"

export const productValidator = [
    body("title")
    .exists().withMessage("title is required").bail()
    .isString().withMessage("Title Must be String").bail()
    .trim()
    .isAlpha("en-US" , {ignore : " "}).withMessage("title must contain only alphabatic charecters").bail()
    .isLength({min:2 , max : 100}).withMessage("Title Length must be between 2 to 100"),
    body("description")
    .exists().withMessage("description is required").bail()
    .trim()
    .isString().withMessage("description must be string").bail()
    .isLength({min : 20 , max : 200}).withMessage(" description's length must be between 20 to 200"),
    body("price.amount")
    .exists().withMessage("amount is required").bail()
    .isFloat({ min:0 }).withMessage("price must be a float value"),
    body("price.currency")
    .exists().withMessage("currency is required").bail()
    .isString().withMessage("currency must be string").bail()
    .isIn(["INR" , "USD"]),
    body("sizes")
    .exists().withMessage("Sizes are required").bail()
    .isArray().withMessage("Sizes must be a array of objects"),
    body("sizes.*.size")
    .exists().withMessage("sizes must be provided").bail()
    .isString().withMessage("Size must be String ").bail()
    .trim()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"]),
    body("sizes.*.stock")
    .exists().withMessage("stock must be provided").bail()
    .isInt({min:0}).withMessage("stock must be a Int value"),

    (req, res , next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message : "Invalid Request",
                errors : errors.array()
            })
        }

        next()
    }
]