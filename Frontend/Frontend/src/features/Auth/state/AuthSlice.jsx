import { createSlice } from "@reduxjs/toolkit";
import { logInUser } from "./authAction";

const AuthSLice = createSlice({
    name : "Auth",
    initialState: {
        user : null,
        isAuthenticated : false,
        Accesstoken : null,
        isLoading : false  
    },
    reducers : {
        addUser : (state , action)=>{
            state.user = action.payload.user
            state.Accesstoken = action.payload.Accesstoken
            state.isAuthenticated = true
            state.isLoading = false
        },
        removeUser : (state , action)=>{
            state.user = action.payload
            state.Accesstoken = null
            state.isAuthenticated = false
            state.isLoading = false
        }
    },extraReducers : (builder)=>{

        builder.addCase(logInUser.pending, (state)=>{
            state.user = null
            state.isLoading = true
            state.Accesstoken = null
            state.isAuthenticated = false
        }).addCase(logInUser.fulfilled, (state , action)=>{
            state.user = action.payload
            state.isLoading = false
            state.Accesstoken = action.payload
            state.isAuthenticated = true
        }).addCase(logInUser.rejected , (state)=>{
            state.user = null
            state.isLoading = false
            state.isAuthenticated = false
            state.Accesstoken = null
        })
    }
})

export const {addUser , removeUser} = AuthSLice.actions

export default AuthSLice.reducer