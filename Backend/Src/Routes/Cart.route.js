import { Router } from "express";
import { authentication } from "../middlewares/Auth.middleware.js";
import { cartValidation } from "../Validator/Cart.validation.js";
import { addToCart, getCart } from "../controller/cart.controller.js";

const router = Router()


router.post("/" , authentication , cartValidation , addToCart )

router.get("/", authentication , getCart )

export default router