import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "legacy-cloud",
  },
});

const Main = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center fixed cursor-pointer">
        <video
          src={cld.video("portfolio-videos/bg-final_xmztp7").toURL()}
          autoPlay={true}
          muted
          loop
          className="absolute z-10 w-auto 
min-w-full min-h-full max-w-none

"
        ></video>

        <Link
          href="/"
          className="absolute inset-0 flex justify-center items-center z-10"
        >
          <Image
            src="/assets/navLogo.png"
            alt="Wally's Logo"
            width="500"
            height="500"
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Main;
