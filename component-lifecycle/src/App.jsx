import React, { useEffect, useState } from 'react'
import Hello from './components/Hello';


const App = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false)

  useEffect(() => {
      console.log("Component Mounting")
  }, [])

  useEffect(()=>{
    console.log("Component Updating")
  },[count])
  
  useEffect(() => {
    return () => {
      console.log("Component Unmount")
    }
  }, [])

  const handleChange = ()=>{
    return setCount(count + 1)
  }

  const handleDisplay = ()=>{
    return setDisplay(true)
  }

  return (
    <>
      <h2>Count</h2>
      <h2>{count}</h2>
      <button onClick={handleChange}>Change</button>

      {display ? <h2>Developer</h2> : <Hello/> }
      <button onClick={handleDisplay}>Change</button>
    </>
  )
}

export default App