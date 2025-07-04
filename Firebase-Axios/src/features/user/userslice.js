import { createSlice } from "@reduxjs/toolkit";
import { createUser, fetchUser } from "./thunk";

const initialState = {
    user : [],
    loading : false,
    error : null,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.loading = true
            state.error = null;
        })
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user.push(action.payload);
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        //fetch
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false;
            let newData = [];
            let data = action.payload;
            for(let key in data){
                newData.push({...data[key], id : key})
            }
            state.user = newData;
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

    }
})

export default userSlice.reducer;