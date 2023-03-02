import React, { useRef } from "react";

import { PlaybackControls } from "./PlaybackControls";

const Landing = () => {
  const playerRef = useRef();
  function handleMouseIn() {
    // playerRef.current.videoRef.play();
    console.log(playerRef);
    playerRef.current.play();
  }
  function handleMouseOut() {
    playerRef.current.pause();
    // playerRef.current.videoRef.current.pause();
  }
  return (
    <>
      <div className="bg-cover bg-center h-full w-full ">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full fixed top-0 left-0 object-cover z-0 "
          ref={playerRef}
          onClick={handleMouseIn}
        >
          <source
            src="https://res.cloudinary.com/legacy-cloud/video/upload/v1677462337/portfolio-videos/bg-final.mp4"
            type="video/mp4"
          />
        </video>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <img src="/assets/navLogo.png" alt="Overlay Image" className="h-80" />
        </div>
      </div>

      <div className="fixed bottom-0 w-full h-80 flex items-center justify-center p-5 space-x-6">
        <button className="px-4" onClick={handleMouseIn}>
          Play{" "}
        </button>
        <button className="px-4" onClick={handleMouseOut}>
          Pause{" "}
        </button>
      </div>
    </>
  );
};

export default Landing;
