import axios from "axios"


// These will connect to firebase and we can use axioInstance in thunk.js
export const axiosInstance = axios.create({
    baseURL : "https://redux-824a2-default-rtdb.firebaseio.com/user", 
})