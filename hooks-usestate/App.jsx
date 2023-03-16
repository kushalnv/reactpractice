import React from 'react'
import "./global.css"

const App=()=>{
  let [count,setcount]=React.useState(0)

  let handleincrement=()=>
  {
    setcount(count+1)
  }
  let handledecrement=()=>{
    setcount(count-1)
  }
  let handlereset=()=>{
    setcount(0)
  }
  return(
    <>
    <div className='mainblock'>
    <h1>{count}</h1>
    </div>
    <div className='buttons'>
      <button className='btn1' onClick={handleincrement}>Increment+</button>
      <button className='btn2' onClick={handledecrement}>Decrement-</button>
      <button className='btn3' onClick={handlereset}>Reset</button>
    </div>
    </>
  )
}
export default App