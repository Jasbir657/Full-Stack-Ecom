import api from "../../../config/API/Api";
import {toast} from "react-toastify"

export const handleLogin = async(data) => {

    try {
        
        const response = await api.post("/auth/login" , data)
         
        console.log(response.data);
        toast.success(response.data.message || "Login SuccessFully")

        return response.data
    } catch (error) {
        
        console.log(error.response.data);
        toast.error(error.response?.data?.message)
    }
}

export const handleRegister = async(data) =>{

    try {
        
        const response = await api.post("/auth/register", data)
        console.log(response.data);
        toast.success(response.data.message || "Register SuccessFully")

    } catch (error) {
        
        console.log(error.response.data)
        toast.error(error.response?.data?.message || "Register Failed")

    }
}