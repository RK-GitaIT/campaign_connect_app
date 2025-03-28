"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import userImage from '../assets/Images/john-iimage.jpg'

export default function Header() {
  const [autoDialCountdown, setAutoDialCountdown] = useState(10);
  const [isManualMode, setIsManualMode] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isManualMode && autoDialCountdown > 0) {
      timer = setInterval(() => {
        setAutoDialCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [autoDialCountdown, isManualMode]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-4 mb-5 pl-6 pr-6">
      
      {/* Left Section */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="flex items-center">
          {/* SVG Logo */}
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="44.000000pt"
            height="50.000000pt"
            viewBox="0 0 44.000000 69.000000"
            preserveAspectRatio="xMidYMid meet"
            className="hover:scale-110 transition-transform duration-300"
          >
            <g
              transform="translate(0.000000,69.000000) scale(0.100000,-0.100000)"
              fill="#cb90a5"
              stroke="none"
            >
              <path d="M162 460 c-16 -15 -22 -32 -22 -60 0 -54 28 -82 77 -78 49 4 57 28 8 26 -44 -2 -58 12 -57 53 1 38 15 49 60 49 45 0 37 24 -9 28 -24 2 -41 -3 -57 -18z" />
              <path d="M205 411 c-7 -13 5 -19 39 -19 31 1 56 -23 56 -52 0 -30 -27 -54 -59 -55 -42 0 -40 -19 2 -23 51 -5 82 25 82 78 0 32 -6 47 -24 61 -24 20 -86 26 -96 10z" />
            </g>
          </svg>
          <span className="text-lg font-semibold text-purple-600 ml-2 hover:scale-110 transition-transform duration-300">
            CampaignConnect
          </span>
        </div>
        <div className="h-12 border-l border-gray-300 mx-7"></div>

        {/* Middle Section (Agent Info) */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 hover:scale-110 transition-transform duration-300">
          {imageError || !userImage ? (
        // Fallback UI: Show "J" with a purple background
        <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center font-bold text-lg rounded-full">
          J
        </div>
      ) : (
        <Image
          src={userImage}
          alt="User"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full"
          onError={() => setImageError(true)} // Handle image load failure
        />
      )}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <div className="text-gray-800 font-semibold">John Doe</div>
            <div className="text-gray-500 text-sm">Agent</div>
          </div>
        </div>
      </div>

      {/* Auto Dialing Section */}
      <div className="flex items-center rounded-lg px-4 py-2 text-gray-600 text-sm font-medium auto-dial mb-4 md:mb-0 md:ml-[50px]">
          <span>Auto Dialing in</span>
          <span className="font-bold ml-1 text-black">{autoDialCountdown} Seconds</span>       
          <button className="ml-3 w-7 h-7 flex items-center justify-center rounded-full text-white shadow-lg pause-play  hover-effect">
            <i className="fas fa-pause"></i>
          </button>
          <button className="ml-2 w-7 h-7 flex items-center justify-center rounded-full text-white shadow-lg pause-play  hover-effect">
            <i className="fas fa-play "></i>
          </button>
        </div>

      {/* Right Section (Buttons) */}
      <div className="flex items-center space-x-3 justify-between md:ml-auto">
        <button
          onClick={() => setIsManualMode(!isManualMode)}
          className="px-3 py-2 border border-gray-600 rounded text-gray-700 text-sm hover:scale-110 transition-transform duration-300"
        >
          Manual Mode
        </button>

        <button
          onClick={() => setAutoDialCountdown(10)}
          className="px-3 py-2 bg-green-500 text-white rounded text-sm hover:scale-110 transition-transform duration-300"
        >
          Start Next Dial
        </button>

        <button type="button" className="text-red-500 hover:text-red-700 p-2 flex items-center log-out hover:scale-110 transition-transform duration-300">
            <i className="fa-solid fa-arrow-right-from-bracket text-xl "></i>
          </button>
      </div>
    </div>
  );
}
