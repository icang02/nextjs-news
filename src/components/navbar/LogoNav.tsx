import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaSearch, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isNavMobile, setIsNavMobile] = useState(false);
  const [isSearchMobile, setIsSearchMobile] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  console.log("Logo nav : " + isNavMobile + " " + isSearchMobile);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
  }, [themeMode]);

  return (
    <div
      id="top-nav"
      className="z-[999] shadow sticky backdrop-blur-[3px] bg-white/90 top-0 w-full px-4 lg:px-0 h-12 md:h-14 flex items-center dark:bg-dark-primary/90 transition-all ease-in-out duration-300"
    >
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        {/* Hamburger */}
        <span
          onClick={() => {
            setIsNavMobile(true);
            setIsSearchMobile(false);
          }}
          className="block md:hidden text-lg cursor-pointer text-zinc-500 dark:text-gray-400"
        >
          <FaBars />
        </span>

        {/* Logo */}
        <Link href="/">
          <img
            src={themeMode == "light" ? "/img/logo-hitam.svg" : "/img/logo.svg"}
            alt="logo"
            className="w-44 lg:w-48"
          />
        </Link>

        {/* Search */}
        <form className="w-[400px] hidden md:block">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2.5 ps-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:outline-none dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 transition-all ease-in-out duration-300"
              placeholder="Search..."
              required
            />
          </div>
        </form>

        {/* Logo search mobile */}
        <span
          className="block lg:hidden text-lg cursor-pointer w-7 text-zinc-500 dark:text-gray-400"
          onClick={() => setIsSearchMobile(true)}
        >
          <FaSearch />
        </span>

        {/* Dark mode */}
        <div className="hidden md:block dark:text-gray-400">
          {themeMode === "dark" ? (
            <span
              onClick={() => setThemeMode("light")}
              className="text-zinc dark:text-accent border border-gray-300 rounded-full size-9 text-base hover:text-gray-500 transition cursor-pointer duration-300 ease-in-out flex justify-center items-center hover:bg-gray-600/5 dark:border-gray-700"
            >
              <FaSun />
            </span>
          ) : (
            <span
              onClick={() => setThemeMode("dark")}
              className="text-zinc-700 border border-gray-300 rounded-full size-9 text-base hover:text-gray-500 transition cursor-pointer duration-300 ease-in-out flex justify-center items-center hover:bg-gray-600/5 dark:border-gray-700"
            >
              <FaMoon />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
