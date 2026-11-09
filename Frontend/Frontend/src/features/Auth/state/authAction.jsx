import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/API/Api";
import { toast } from "react-toastify";


export const logInUser = createAsyncThunk("/auth/login" , async(Credential , thunkApi)=>{
    try {
        const res = await api.post("/auth/login" , Credential)
        console.log(res.data.message);
        toast.success(res.data.message)
        return res.data

    } catch (error) {
        toast.error(error.response?.data?.message || "Login Failed")
        return thunkApi.rejectWithValue("login API failed" , error)
    }
})