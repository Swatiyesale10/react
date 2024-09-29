

import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(15)
//let counter = 15
const addValue =() => {

  if(counter < 20) {
    setCounter(counter+1)
  }
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1) // this will only increase count as 1 //work in batch

  // setCounter((prevCounter) => prevCounter+1)
  // setCounter((prevCounter) => prevCounter+1)
  // setCounter((prevCounter) => prevCounter+1)
}

const removeValue = () =>{
  if(counter > 0) {
    setCounter(counter-1)
  
  }
  
 
}
  return (

    <>
      <h1>React course with swati {counter}</h1>
      <h2> counter value : {counter}</h2>
      <button
      onClick={addValue}
      > Add Value </button>{" "}
      <button
      onClick={removeValue}> Remove Value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
