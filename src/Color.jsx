import React, { useState } from 'react'

const Color = () => {

    const[color, setColor] = useState("white")


  return (
    <div className='flex flex-col items-center text-white text-xl'>
        <h1 className='text-3xl my-5'>Color Changer</h1>
        <div className='h-50 w-50' style={{backgroundColor:color}} >
         
        </div>
        <div className='my-5 space-x-5 ' >
            <button className='px-4 py-2 bg-red-500' onClick={()=>setColor("red")} id='red'>Red</button>
            <button className='px-4 py-2 bg-sky-500' onClick={()=>setColor("blue")} id='blue'>Blue</button>
            <button className='px-4 py-2 bg-green-500' onClick={()=>setColor("green")} id='green'>Green</button>
        </div>
    </div>
  )
}

export default Color