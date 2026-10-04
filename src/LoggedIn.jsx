import React from 'react'

function LoggedIn() {
    const isLoggedIn = false;
    if (isLoggedIn) {
        return <button>Logout</button>
    }else {
        return <button>Login</button>
    }


  return (
    <div>
        {isLoggedIn}
    </div>
  )
}

export default LoggedIn