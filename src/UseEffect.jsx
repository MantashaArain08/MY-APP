import React, { useEffect } from 'react'

function UseEffect({county}) {
  function abc() {
    console.log("A change declare in the props")
  }
  useEffect(() => {
    abc()
  }, [])
  
 

  return (
    <div>UseEffect {county}</div>
  )
}

export default UseEffect