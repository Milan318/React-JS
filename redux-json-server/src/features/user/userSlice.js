import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    list:[],
    loading : false,
    error : false,
}



export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

    }

    
})

export default productSlice.reducer 