import React from 'react'

function Hours() {
     let morning = 11;
      let afternoon = 13;
      let evening = 19;
      let msg ;
           if (morning<12) {
        msg = <h2>"Good Morning"</h2>

      }else if (afternoon>=12||afternoon<=18) {
        msg = <h2>"Good Afternoon"</h2>
      }

      else {
        msg = <h2>"Good Evening"</h2>
      }


  return (
    <>
    {msg}
    
    </>
  )
}

export default Hours