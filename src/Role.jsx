import React from 'react'

function Role() {
    const role = "admin" ;
    let msg;
    if(role){
      msg = <h2>"Welcome Admin"</h2>
    }else{
        msg = <h2>"Welcome editor or viewer"</h2>
    }

  return (
    <>
    {msg}
    </>
  )
}

export default Role