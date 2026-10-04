import React from 'react'

function Cards(props) {
  return (
    <div>
        <p>Name of Student : {props.name}</p>
        <p>Name of Description : {props.descpt}</p>
        <p>Name of Age : {props.age}</p>
        
    </div>
  )
}

export default Cards