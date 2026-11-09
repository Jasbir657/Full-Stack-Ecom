import {body, validationResult} from "express-validator"

export const registerValidator = [
    body("email")
    .exists().withMessage("Email is required").bail()
    .trim()
    .isEmail().withMessage("Enter a Valid EMail Address"),
    body("name")
    .exists().withMessage("Name is Required").bail()
    .trim()
    .isString().withMessage("Name Must be String").bail()
    .isLength({min : 2 , max: 50}).withMessage("Name Length must be between 2 to 50"),
    body("password")
    .exists().withMessage("Password is required").bail()
    .trim()
    .isLength({min: 6}).withMessage("password should contain minimum 6 charecter"),
    (req , res , next) => {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message : "INVALID REQUEST",
                errors : errors.array()
            })
        }
        next()
    }
]

export const loginValidator = [

    body("email")
    .exists().withMessage("Email is Required").bail()
    .trim()
    .isString().withMessage("Email Must be String").bail()
    .isEmail().withMessage("Entered Value Must be a Email"),
    body("password")
    .exists().withMessage("Password is Required").bail()
    .trim()
    .isString().withMessage("Password Must be String")
    .isLength({min: 2 , max : 50}).withMessage("Password charecter Must be between 2 to 50"),
    (req , res , next) => {

        const error = validationResult(req)

        if(!error.isEmpty())

            res.status(400).json({
                message : "Invalid Request",
                error : error.array()
            })
            next()

    }
]