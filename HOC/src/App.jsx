import React from 'react'
import HOC from './Utils/HOC'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'

const App = () => {

  let AuthDsh = HOC(Dashboard)

  return (
    <>
    <Home/>
      <AuthDsh user = "Milan"/>
    </>
  )
}

export default App