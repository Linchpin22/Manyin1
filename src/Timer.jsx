// import React, { useEffect, useState } from 'react'

// const Timer = () => {


// const [hour, setHour] = useState(0)
// const [min, setMin] = useState(0)
// const [sec, setSec] = useState(0)

// useEffect(() => {
//     const interval = setInterval(() => {
//         setSec((prevSec) => prevSec + 1);
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup to prevent memory leaks
// }, []);


// }

//   return (
//     <div className='flex flex-col w-full items-center text-3xl text-white'>
//            <h1>Timer and Watch</h1>
//            <div className='flex w-full items-center text-center'>
//            <div className='w-1/2 bg-blue-500'>
//             <h1>Timer</h1>
//             <div className='flex justify-center'>
//                 <h2>{hour}:</h2>
//                 <h2>{min}:</h2>
//                 <h2>{sec}</h2>
//             </div>
//             <div>
//                 <button onClick={handleStart} >Start</button>
//                 <button>Reset</button>
//                 <button>Stop</button>
//             </div>
//            </div>
//            <div className='w-1/2 bg-red-500'>
//             <h1>Watch</h1>
//            </div>
//            </div>
//     </div>
//   )
// }}

// export default Timer

import React from 'react'

export const Timer = () => {
  return (
    <div>Timer</div>
  )
}


