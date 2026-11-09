import { Router } from "express";
import { getMe, loginUSer, refresh, registerUser } from "../controller/Auth.controller.js";
import { loginValidator, registerValidator } from "../Validator/auth.validator.js";
import { authentication } from "../middlewares/Auth.middleware.js";

const router = Router()

router.post("/register" , registerValidator , registerUser)

router.post("/login" , loginValidator , loginUSer )

router.post("/refresh" ,  refresh)

router.get("/me" , authentication , getMe)  

export default router