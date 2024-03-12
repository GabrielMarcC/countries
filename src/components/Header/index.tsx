"use client";

import { useTheme } from "next-themes";
import { ControlTheme } from "@/Providers/ThemeProvider/control-theme";

export const Header = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="w-full  flex flex-row justify-between lg:py-4 lg:px-9 px-6 items-center shadow-md  dark:bg-dark_blue">
      <h1 className="font-bold lg:text-[30px] lg:ml-4 py-4">
        Where in the world?
      </h1>
      <div className="w-[40%] xl:w-[20%] lg:justify-end flex justify-center items-center gap-1 py-4">
        <ControlTheme />
        <span className="font-semibold lg:text-[20px] lg:px-4">
          {resolvedTheme && resolvedTheme === "dark"
            ? "Light Mode"
            : "Dark Mode"}
        </span>
      </div>
    </header>
  );
};
