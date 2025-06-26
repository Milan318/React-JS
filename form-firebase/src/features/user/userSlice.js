import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    loading:false,
    error:null,
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
    }

})