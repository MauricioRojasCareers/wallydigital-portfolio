import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center fixed">
        <video
          src="/assets/bg-final.MP4"
          autoplay="{true}"
          loop
          muted
          className="absolute z-10 w-auto 
min-w-full min-h-full max-w-none

"
        ></video>

        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Image
            src="/assets/navLogo.png"
            alt="/"
            width="500"
            height="500"
          ></Image>
        </div>
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
