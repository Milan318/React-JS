import React from 'react'

const HOC = (Component) => {
    let isAuth = true
    let wrappedComponent = (props)=>{
        return isAuth ? <Component {...props}/> : 
        <h1>Login</h1>
    }
    return wrappedComponent;
}

export default HOC