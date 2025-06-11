import React, { useEffect, useState } from 'react'
import Header from "./Components/Header/Header"
import Form from "./Components/Form/Form"
import axios from 'axios';


function App(){
    
     const URL ='http://localhost:3000/user';
     const [users,setUsers]=useState([]);
     const [user,setUser]=useState({});
     const [editId,setEditId]=useState('');

     useEffect(()=>{
      handleFetch();
     });

     const handleFetch=async ()=>{
      let res=await axios.get(URL);
      let data=res.data;
      console.log(data);
      setUser(data);
     }



  
  return (
    <>
      <Header/>
      <Form/>
    </>
  )
}

export default App
