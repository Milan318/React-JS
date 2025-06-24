import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetch = createAsyncThunk('fetch/product',async()=>{
    let res = await axios.get("http://localhost:3000/product");
    return res.data
})

export const createProduct = createAsyncThunk('create/product',async(product)=>{
    let res = await axios.post("http://localhost:3000/product",{...product,id:Date.now()});
    return res.data;
})

export const updateProduct = createAsyncThunk('updateProduct',async(product)=>{
    let res = await axios.put(`"http://localhost:3000/product"/${product.id}`,product);
    return res.data;
})

export const deleteproduct = createAsyncThunk('delete/product',async(id)=>{
    let res = await axios.delete(`http://localhost:3000/product/${product.id}`);
    return id;
})

