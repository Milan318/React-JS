import React from 'react'
import { getDatabase ,set,ref } from "firebase/database";
import { app } from './firebase';


const App = () => {

  const db = getDatabase(app);
   const handleData=()=>{
    set(ref(db,"/product"),{
      name:"john",
      age:25,
    })
   }


  return (
    <>
      <button onClick={handleData}>Click</button>
    </>
  )
}

export default App
