import React, { useReducer } from 'react'

function App() {

  const reducer=(state,action)=>{

    switch (action.type)
    {
      case 'decrement':
      return state -=1;

      case 'reset':
        return state =0;

      case 'increment':
        return state +=1;  

    }

  }

  const [state,dispatch]=useReducer(reducer,0);


  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <h2 className='mt-5 text-center'>Count:{state}</h2>
          <div className='mt-3 text-center'>
          <button onClick={()=>dispatch({type:'decrement'})}>-</button>{' '}
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>{' '}
          <button onClick={()=>dispatch({type:'increment'})}>+</button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
