"use client";
import { useState, useEffect } from "react";
import {
  FaCalendarDays,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const TopNav = () => {
  const [currentTime, setCurrentTime] = useState<string>("00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", { hour12: false });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const classes =
    "rounded-[50%] text-sm md:text-base size-6 md:size-7 transition cursor-pointer duration-300 ease-in-out flex justify-center items-center dark:text-gray-400 dark:border-white/15 dark:hover:text-gray-300 dark:hover:border-white/25";

  return (
    <div className="px-3 h-8 lg:h-10 flex items-center border-b lg:px-0 bg-white dark:bg-dark-primary dark:border-b-gray-800 transition-all ease-in-out duration-300">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6 font-semibold text-[#666666] dark:text-gray-400">
          {/* Time */}
          <span className="text-[9px] lg:text-xs flex items-center space-x-1 md:space-x-2">
            <FaCalendarDays className="-mt-0.5 md:mt-0" />
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </span>
          <span className="hidden md:block w-[1px] h-[22px] bg-[#CBCBCB]"></span>
          <div className="lg:text-[13px] hidden lg:inline-flex items-center space-x-1.5 font-mono">
            <FaClock />
            <span id="current-time">{currentTime}</span>
            <span className="text-[10px]">(WITA)</span>
          </div>
        </div>

        {/* Share icon */}
        <div className="flex items-center space-x-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/kendarikota.goideme/"
            className={`${classes} border border-blue-600/15 text-blue-600 bg-blue-600/5`}
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/kendarikota/"
            className={`${classes} border border-[#D72A78]/15 text-[#D72A78] bg-[#D72A78]/5`}
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCFytYxv0Xw4WnDTQUKfRQCg"
            className={`${classes} border border-red-600/15 text-red-600 bg-red-600/5`}
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
