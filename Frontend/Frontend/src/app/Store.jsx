import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from "../features/Auth/state/AuthSlice"

export const Store = configureStore({
    reducer : {
        auth : AuthReducer
    }
})

