import Image from "next/image";
import Link from "next/link";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { CldVideoPlayer } from "next-cloudinary";
import { useRef } from "react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "legacy-cloud",
  },
});

const Main = () => {
  const myVideo = cld.video("/portfolio-videos/bg-final2_e1obdh");
  const playerRef = useRef();
  function initialCheck() {
    playerRef.current.videoRef.current.play();
    console.log("initialCheck", playerRef.current.videoRef);
  }
  function secondCheck() {
    playerRef.current.videoRef.current.pause();
    console.log("secondCheck", playerRef.current.videoRef);
  }
  function handlePause() {
    console.log("video has been paused!");
    playerRef.current.videoRef.current.play();
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center fixed cursor-pointer">
        <AdvancedVideo
          autoPlay
          onSuspend={handlePause}
          onMouseOver={initialCheck}
          onMouseOut={secondCheck}
          ref={playerRef}
          cldVid={myVideo}
          loop
          playsInline
          muted
        />
        {/* <video
          src={}
          autoPlay
          muted
          playsInline
          loop
          className="absolute z-10 w-auto 
min-w-full min-h-full max-w-none

"
        ></video> */}

        {/* <Link
          href="/"
          className="absolute inset-0 flex justify-center items-center z-10"
        >
          <Image
            style={{ width: "auto", height: "auto" }}
            src="/assets/navLogo.png"
            alt="Wally's Logo"
            width={500}
            height={500}
            priority={true}
          ></Image>
        </Link> */}
      </div>
    </>
  );
};

export default Main;
