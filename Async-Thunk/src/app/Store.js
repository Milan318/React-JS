import {configureStore} from "@reduxjs/toolkit";
import  userReducer from "../features/employee/employeeSlice";


export const store = configureStore({
    reducer:{
        users: userReducer,
    }
})