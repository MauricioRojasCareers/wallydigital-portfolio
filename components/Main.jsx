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
    playerRef.current.play();
    console.log(playerRef);
  }
  function handleMouseOut() {
    playerRef.current.pause();
    // playerRef.current.videoRef.current.pause();
  }

  return (
    <>
      <section className=" fixed bg-slate-300 h-screen w-screen">
        <div
          className=" w-screen h-screen
        "
        >
          <video
            src="https://res.cloudinary.com/legacy-cloud/video/upload/v1677462337/portfolio-videos/bg-final.mp4"
            autoPlay
            loop
            ref={playerRef}
            className="min-w-full min-h-full max-w-none
            "
          >
            {" "}
          </video>
        </div>
        {/* <AdvancedVideo
          // autoPlay
          ref={playerRef}
          cldVid={myVideo}
          // loop
          playsInline
          muted
          controls
        /> */}

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
      <footer className=" bg-black fixed bottom-0">
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
      </footer>
    </>
  );
};

export default Main;
