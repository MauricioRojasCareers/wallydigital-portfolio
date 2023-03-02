import Image from "next/image";
import Link from "next/link";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { CldVideoPlayer } from "next-cloudinary";
import { useRef, useEffect } from "react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "legacy-cloud",
  },
});

const Main = () => {
  const myVideo = cld.video("/portfolio-videos/bg-final2_e1obdh");
  const playerRef = useRef();
  function initialCheck() {
    // playerRef.current.videoRef.current.play();
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
  function handlePlay() {
    playerRef.current.videoRef.current.play();
  }
  useEffect(() => {
    playerRef.current.videoRef.current.play();
    console.log("pressed play!");
  }, []);
  return (
    <>
      <section className=" bg-gray-200 flex justify-center items-center cursor-pointer">
        <AdvancedVideo
          autoPlay
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
      </section>
      <section className="p-5">
        <button onClick={initialCheck}>PLay </button>
        <button onClick={secondCheck}>Pause </button>
      </section>
    </>
  );
};

export default Main;
