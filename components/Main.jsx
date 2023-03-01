import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

import videos from "../data/videos";

const cld = new Cloudinary({
  cloud: {
    cloudName: "legacy-cloud",
  },
});

const Main = () => {
  const [source, setSource] = useState("");
  const myVideo = cld.video("/portfolio-videos/bg-final");

  useEffect(() => setSource(cld.video(videos[0].id).toURL()));
  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center fixed cursor-pointer">
        <AdvancedVideo
          cldVid={myVideo}
          autoplay="true"
          muted
          loop
          className="absolute z-10 w-auto 
min-w-full min-h-full max-w-none"
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

        <Link
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
        </Link>
      </div>
    </>
  );
};

export default Main;

// {cld.video(videos[0].id).toURL()}
