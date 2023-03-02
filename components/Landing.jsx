import React, { useRef } from "react";
import Image from "next/image";

const Landing = () => {
  const playerRef = useRef();
  function handleMouseIn() {
    playerRef.current.play();
    console.log(playerRef);
  }
  function handleMouseOut() {
    playerRef.current.pause();
    // playerRef.current.videoRef.current.pause();
  }
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0">
      <div className="absolute top-0 left-0 bottom-14 right-0 flex flex-col-3 flex-wrap no-scrollbar gap-5   "></div>

      <Image
        src="/assets/navLogo.png"
        alt="Wally's Logo"
        width={500}
        height={500}
        priority={true}
        className=" absolute z-40 m-auto  top-0 bottom-14"
      ></Image>

      <video
        src="https://res.cloudinary.com/legacy-cloud/video/upload/v1677462337/portfolio-videos/bg-final.mp4"
        autoPlay
        muted
        playsInline
        loop
        ref={playerRef}
        className="min-w-full min-h-full max-w-none z-100
            "
      ></video>

      <div className="absolute container left-0 bottom-0 h-14 w-full ">
        <div className=" p-2 flex justify-center space-x-5">
          <button className="px-4" onClick={handleMouseIn}>
            Play{" "}
          </button>
          <button className="px-4" onClick={handleMouseOut}>
            Pause{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
