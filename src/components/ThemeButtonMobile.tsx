"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButtonMobile = () => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setThemeMode(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === "dark" ? "light" : "dark";
    setThemeMode(newTheme);
  };

  return (
    <div className="fixed lg:hidden bottom-6 right-5 z-[999]">
      <button
        onClick={toggleTheme}
        className="text-base text-zinc-600 dark:text-accent backdrop-blur bg-white/70 dark:bg-zinc-700 p-2 rounded-full"
      >
        {themeMode === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeButtonMobile;
