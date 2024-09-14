import React, { useEffect, useState } from "react";
import { MoonSwitcher, SunSwitcher } from "../icons";

function Header() {
  const [themeIcon, setThemeIcon] = useState(localStorage.theme);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeIcon])
  const onSwitchTheme = () => {
    if (!localStorage.theme) {
      localStorage.theme = "dark";
    }
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.add("dark");
      setThemeIcon("light");
    } else if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.remove("dark");
      setThemeIcon("dark");
    }
  };
  return (
    <div className="dark:bg-[#1F1F42] bg-[#81BCFF] flex items-center justify-between fixed top-0 left-0 w-full h-14 px-4">
      <p className="text-white  text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold">
        Home
      </p>
      <div className="flex items-center justify-between gap-x-5">
        <button
          onClick={onSwitchTheme}
          className="text-white  text-2xl sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold "
        >
          {themeIcon === "dark" ? <MoonSwitcher/> : <SunSwitcher/>}
        </button>
        <p className="text-white text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold mt-[-15px] ">
          ...
        </p>
      </div>
    </div>
  );
}

export default Header;
