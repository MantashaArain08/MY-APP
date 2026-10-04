import React, { useState } from 'react'

function Text() {
    const [x, setx] = useState('')
  return (
    <>
    <h1>Today we are learning about React Form</h1>
    <input type="text" value={x} onChange={(a)=> setx(a.target.value)} placeholder="Enter your text"/>
    <h2>Enter Your Name: {x}</h2>
    <button onClick={()=> setx("")}>Clear</button>
    
    
    </>
  )
}

export default Text