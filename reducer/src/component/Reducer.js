import React, { useReducer } from 'react'
import "./reducer.css"

let initialState=0;
const reducer = (state,action)=>{
  switch (action.type) {
    case 'decrement':
      return state-1;
    case 'increment':
      return state+1;
    default:
      return state;
  }

}

function Reducer() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>Reducer Tutorial</h1>
        <div className='buttonCase'>

        <button type="button" onClick={()=> dispatch({type: 'decrement'})} className="btn btn-success">-</button>
        <h2>{state}</h2>
        <button type="button" onClick={()=> dispatch({type: 'increment'})} className="btn btn-warning">+</button>
        </div>
      
    </div>
  )
}

export default Reducer
