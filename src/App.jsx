import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef 
  const passwordRef = useRef('')

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (characterAllowed)  str+= "!~@#$%^&*()_+-{}[]|\/?><,.`"
    if (numberAllowed) str+= "0123456789" 

    for(let i=1 ; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])


  const handleCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password]);

  
  useEffect(()=>{
   passwordGenerator()
  },[length,characterAllowed,numberAllowed,passwordGenerator])

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex flex-shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        ref = {passwordRef}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={handleCopyToClipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input type="range" min={8}
            max={150}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>    
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked = {numberAllowed} 
        id="numberInput"
        onChange={()=>{
          setnumberAllowed((prevNum) => !prevNum)}}/>
      </div>
      <label>Numbers</label>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked = {characterAllowed}
        id="characterInput"
        onChange={()=>{setCharacterAllowed((prevChar)=> !prevChar)}} />
      </div>
      <label>Characters</label>
       </div>
    </div>
   
  )
}

export default App
