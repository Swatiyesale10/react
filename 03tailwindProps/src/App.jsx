import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObject ={
    username: "hitesh",
    age: 21
  }
 let newArr = [1,2,3]
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl'>
      Hello world!
    </h1>
    <Card username="GrowWidSwati" btnText="click me"></Card>
    <Card username="Swati" btnText="visit me"></Card>
    </>
  )
}

export default App
