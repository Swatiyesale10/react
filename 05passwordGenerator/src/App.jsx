import { useState, useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[checknum, setCheckNum] = useState(false)
  const[checkchar, setCheckChar] = useState(false)
  const[password, setPassword]=useState("")

  //use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(checknum) str+="0123456789"
    if(checkchar) str+="!@#$%^&*-_+=[]{}~`"
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }

    setPassword(pass)
  }
  ,[length,checknum,checkchar, setPassword])

 const copyPassToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,length)
  window.navigator.clipboard.writeText(password)
 },[password])

  useEffect(()=>{passwordGenerator()},[length,checknum,checkchar,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto 
     shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'> 
     <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      ref={passwordRef}
      readOnly
      
      />
      <button
      onClick={copyPassToClipBoard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'> 
        <input
         type="range"
         min={6}
         max={100}
         value={length}
         className='cursor-pointer'
         onChange={(e)=> {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>

       </div>
       <div className='flex items-center gap-x-1'>
       <input
          type="checkbox"
          defaultChecked={checknum}
          id="numberInput"
          onChange={() => {
              setCheckNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={checkchar}
              id="characterInput"
              onChange={() => {
                  setCheckChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
     
       </div>
       </div>
      </div>
    </>
  )
}

export default App
