import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchData = createAsyncThunk('user/fetchData', async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    return data;
});


const initialState = {
    isLoading: false,
    users: [],
    isError: false,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default userSlice.reducer;
export { fetchData };
