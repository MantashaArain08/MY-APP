import React, { use, useCallback, useState } from 'react'
import Child from './Child'

function Usecall() {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const callhandle = useCallback( () => { 
        console.log("Child wala function")
    },[]);
    
  return (
    <div>
        <h1>Today we are learning about Usecallback!</h1>
        <button onClick={() => setx(x+1)}>Increment</button>
        <h1>{x}</h1>
        <button onClick={() => sety(y-1)}>Decrement</button>
        <h1>{y}</h1>

        <Child Buttonname="Child button" handle={callhandle}/>



    </div>
  )
}

export default Usecall