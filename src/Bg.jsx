import React, { useState } from 'react'

function Bg() {
    const [change, setchange] = useState("white");
    const backgroungImages ={
        red : 'url(https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-188639-593655.jpg&fm=jpg)',
        yellow : 'url(https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png)',
        brown : 'url(https://yourhomify.com/wp-content/uploads/2024/11/Toffee-Rose.webp)',
        orange : 'url(https://img.freepik.com/premium-photo/orange-fruit-photography_1409-7712.jpg)',
        blue : 'url(https://scienceinschool.org/wp-content/uploads/2022/10/blue_teaser.png)',
        purple : 'url(https://www.hdwallpapers.in/download/purple_rose_hd-HD.jpg)',
        
    }
    
  return (
    <>
    <div className="main" style={{
        // backgroundColor: change,
        backgroundImage : backgroungImages[change]
    }}>
        <center>
            <div className="bar">
            <button onClick={()=>{setchange("red")}}>Red</button>
            <button onClick={()=>{setchange("yellow")}}>Yellow</button>
            <button onClick={()=>{setchange("brown")}}>Brown</button>
            <button onClick={()=>{setchange("orange")}}>Orange</button>
            <button onClick={()=>{setchange("blue")}}>Blue</button>
            <button onClick={()=>{setchange("purple")}}>Purple</button>
        </div>
        </center>
    </div>
    
    
    
    </>
  )
}

export default Bg