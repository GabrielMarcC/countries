"use client";

import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";

export const SearchCountry = () => {
  return (
    <div className="w-[100%] lg:w-[40%] h-[3rem] flex justify-center items-center  bg-white dark:bg-dark_blue border shadow-md rounded-lg">
      <IoIosSearch color="gray" />
      <Input
        className="w-[80%] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:opacity-50 border-none dark:bg-dark_blue "
        placeholder="Search for a country..."
      />
    </div>
  );
};
