import React, { useState } from 'react'

const UserContextProvider = ({Children}) => {

    const [user,setUser]=useState({});

    <UserContext.Provider value={{user,setUser}}/>

    {Children}

    <UserContext.Provider/>

  return (
    <>
      
    </>
  )
}

export default UserContextProvider

