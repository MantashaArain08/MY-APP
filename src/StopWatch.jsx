import React, { useRef, useState } from 'react'

function StopWatch() {
    const [time, settime] = useState(0)
    let timeref = useRef(null);
    function Startime() {
        timeref.current = setInterval(() => {
            settime(time => time+1);
        }, 100);

    }
    function Stoptime() {
        clearInterval(timeref.current);
        timeref.current = null;
        
    };
    function Resetime() {
        settime(0);
    };
    
  return (
    <div>
        <center>
            <div className='watch'>
                <h1>Your Stop Watch : {time}</h1>
            </div>
            <button className='Start' onClick={Startime}>Start</button>
            <button className='Stop' onClick={Stoptime}>Stop</button>
            <button className='Reset' onClick={Resetime}>Reset</button>
        </center>
    </div>
  )
}

export default StopWatch
