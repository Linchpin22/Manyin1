import React, { useCallback, useEffect, useState } from 'react'

const Password = () => {

    const[length, setLength] = useState(6);
    const[isnum, setIsNum] = useState(false);
    const[ischar, setIsChar] = useState(false);
    const[pass, setPass] = useState("");

    const passgenerator= useCallback(()=>{
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm";
      if(isnum) str += "0987654321"
      if(ischar) str += "!@#$%^&*()_`~"

      for (let i = 0; i <= length; i++) {
        let passw = Math.floor(Math.random()*str.length+1);
        password += str.charAt(passw) 
      }
      setPass(password);
    },[length,ischar,isnum])

    useEffect(()=>{passgenerator()},[length,isnum,ischar,setPass])
    

  return (
    <>
    <div className='flex w-full flex-col my-5 text-white items-center'>
        <h1 className='text-3xl'>Password Generator</h1>
        <div className='flex w-full flex-col items-center '>
            <div className='my-5 flex w-full flex-row justify-center items-center'>
            <input type='text' readOnly value={pass} className='bg-white text-black px-5 py-2 '  />
            
            </div>
            <div className='space-x-5 my-2 flex flex-row justify-center items-center text-xl'>
            <input type='range' min={6} max={100} onChange={(e)=>{setLength(e.target.value)}} value={length} className='py-5 px-5' />
            <label>Length: <span className='text-red-500'>{length}</span></label>
            <input type="checkbox" onChange={()=>{setIsNum((prev)=>!prev)}} name="Numbers"/>
            <label>Numbers</label>
            <input type="checkbox" onChange={()=>{setIsChar((prev)=>!prev)}} name="Special Characters"/>
            <label>Spl Char</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Password