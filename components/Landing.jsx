import React, { useRef } from "react";
import Image from "next/image";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const Landing = () => {
  const playerRef = useRef();
  function handlePlay() {
    playerRef.current.play();
  }
  function handlePause() {
    playerRef.current.pause();
  }

  const handlePlayingMessage = () => {
    console.log("playing...");
  };

  const handlePauseMessage = () => {
    console.log("not playing");
  };

  return (
    <>
      <div className="bg-cover bg-center h-full w-full ">
        <video
          id="videoId"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full fixed top-0 left-0 object-cover z-0 "
          ref={playerRef}
          onPlay={handlePlayingMessage}
          onPause={handlePauseMessage}
        >
          <source
            src="https://res.cloudinary.com/legacy-cloud/video/upload/c_crop,g_south_west,h_837,w_853,x_152,y_145/v1677759682/portfolio-videos/Website_footage_vnmkoj.mp4"
            type="video/mp4"
          />
        </video>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <Image
            src="/assets/chromelogoshadow.png"
            alt="Overlay Image"
            width={500}
            height={500}
            size={50}
          />
        </div>
      </div>

      <div className="fixed bottom-0  w-full items-center justify-center  h-20 flex  p-5 space-x-6 text-white">
        <AiFillPlayCircle
          size={25}
          className="md:hidden"
          onClick={handlePlay}
        />
        <AiFillPauseCircle
          onClick={handlePause}
          size={25}
          className="md:hidden"
        ></AiFillPauseCircle>
      </div>
    </>
  );
};

export default Landing;
