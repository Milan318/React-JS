import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        createUser:(state,action)=>{
         state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
         state.users = state.users.filter((value,index)=>index !== action.payload)
        },
        updateUser:(state,action)=>{
         state.users
        }
        
    }
})

export const {createUser,deleteUser}=userSlice.actions;
export default userSlice.reducer