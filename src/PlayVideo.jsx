import React, { useRef } from 'react'

function PlayVideo() {
    const videoRef = useRef(null);

    const playVideo = () => {
        if(videoRef.current) {
           videoRef.current.play();
        }
    };

    const pauseVideo = () => {
        if(videoRef.current) {
            videoRef.current.pause();
        }
    };
  return (
    <div>
        <video ref={videoRef} width="640" height="360" controls>
            <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vd3bj2jPe/videoblocks-6585c946e675c475ff25ae15_sgndwgrt6__8c16faa06bf752fe582989cdeeb0dd1c__P360.mp4" type="video/mp4"/>
        </video>
        <div>
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>
    </div>
  )
}

export default PlayVideo