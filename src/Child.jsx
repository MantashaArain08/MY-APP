import React from 'react'

function Child(props) {

    console.log("Child rerender horha hai");

  return (
    <div>
        <button onClick={props.handle}> {props.Buttonname} </button>
    </div>
  )
}

export default React.memo( Child)