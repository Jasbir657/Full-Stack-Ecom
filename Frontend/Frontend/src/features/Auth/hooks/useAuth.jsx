import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import { logInUser } from "../state/authAction";
import { useState } from "react";


export const useAuthHook =() => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { 
         register ,
         handleSubmit ,
         formState : {errors},
         reset
    
     } = useForm()


     const loginForm = async(data)=>{

        try {
            
        await dispatch(logInUser(data)).unwrap();
        navigate("/home")

        } catch (error) {
            console.log(error);
            
        }

     }



    return {
        navigate,
        register,
        handleSubmit,
        errors,
        reset,
        loginForm,
        showPassword,
        setShowPassword,
        showConfirmPassword, setShowConfirmPassword
    }
}

export default useAuthHook 


