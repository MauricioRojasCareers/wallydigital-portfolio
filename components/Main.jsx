import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center fixed cursor-pointer">
        <video
          src="/assets/bg-final.MP4"
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
        {/* <div className=" z-0">
          <TbArrowBigUpLines></TbArrowBigUpLines>
        </div> */}
      </div>
    </>
  );
};

export default Main;

// <video autoPlay muted loop>
//     <source src="/assets/video.MP4" type="video/mp4" />
// </video>

/*
<div
className="flex items-center 
justify-center h-screen bg-red-700
fixed w-full
"
>
<video
  src="/assets/bg-final.MP4"
  autoplay="{true}"
  loop
  muted
  className="absolute z-10 w-auto 
min-w-full min-h-full max-w-none

"
></video>
</div>
<div className="bg-black-700 ">Hello World</div>

*/
