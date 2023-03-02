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
  function handleMouseIn() {
    playerRef.current.videoRef.current.play();
  }
  function handleMouseOut() {
    playerRef.current.videoRef.current.pause();
  }

  return (
    <>
      <section className=" fixed bg-gray-200 flex justify-center items-center cursor-pointer">
        <AdvancedVideo
          // autoPlay
          ref={playerRef}
          cldVid={myVideo}
          // loop
          playsInline
          muted
          controls
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
      <section className=" bg-slate-900  fixed">
        <div className="items-center flex mx-auto p-5 w-screen">
          <div className="space-x-2 p-5 w-screen">
            <button className="px-4" onClick={handleMouseIn}>
              Play{" "}
            </button>
            <button className="px-4" onClick={handleMouseOut}>
              Pause{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
