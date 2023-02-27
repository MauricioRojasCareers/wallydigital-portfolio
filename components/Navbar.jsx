import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillPersonLinesFill, BsTwitch } from "react-icons/bs";
import ReactTypingEffect from "react-typing-effect";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20  z-[100]">
      <div className="flex justify-center items-center w-full h-full px-4 2xl:px:16">
        <div className="text-white drop-shadow-red z-100">
          <ul className="hidden md:flex tracking-widest">
            <Link href="/">
              <li className="ml-10 text-md font-bold font-outline-2 uppercase hover:border-b-4  border-b-indigo-200  p-1">
                Home
              </li>
            </Link>
            <Link
              href="/"
              className="ml-10 text-md font-bold font-outline-2 uppercase hover:border-b-4 border-b-indigo-200  p-1"
            >
              <li> About </li>
            </Link>
            <Link
              href="/"
              className="ml-10 text-md font-bold font-outline-2 uppercase hover:border-b-4 border-b-indigo-200  p-1"
            >
              <li> Skills </li>
            </Link>
            <Link
              href="/"
              className="ml-10 text-md font-bold font-outline-2 uppercase hover:border-b-4 border-b-indigo-200  p-1"
            >
              <li> Projects </li>
            </Link>
            <Link
              href="/"
              className="ml-10 text-md font-bold font-outline-2 uppercase hover:border-b-4 border-b-indigo-200  p-1"
            >
              <li> Contact </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden backdrop-blur-md">
            <AiOutlineMenu size={50} />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                style={{ width: "auto", height: "auto" }}
                src="/assets/navLogo.png"
                width="87"
                height="35"
                alt="Wally's Logo"
                priority={true}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <ReactTypingEffect
                text={["Videogropher.", "Editor", "Digital Artist"]}
              />
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="">
                <li className="py-4 text-sm drop-shadow-md">
                  <ReactTypingEffect
                    text={["Home"]}
                    typingDelay="500"
                  ></ReactTypingEffect>
                </li>
              </Link>
              <Link href="">
                <li className="py-4 text-sm">
                  <ReactTypingEffect
                    text={["About"]}
                    typingDelay="500"
                  ></ReactTypingEffect>
                </li>
              </Link>
              <Link href="">
                <li className="py-4 text-sm">
                  <ReactTypingEffect
                    text={["Projects"]}
                    typingDelay="500"
                  ></ReactTypingEffect>
                </li>
              </Link>
              <Link href="">
                <li className="py-4 text-sm">
                  <ReactTypingEffect
                    text={["Contact"]}
                    typingDelay="500"
                  ></ReactTypingEffect>
                </li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillInstagram />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillTwitterCircle />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsTwitch />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
