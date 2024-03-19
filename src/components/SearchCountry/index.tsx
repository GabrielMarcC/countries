"use client";

import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { validateField } from "@/utils/validateField";

export const SearchCountry = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchByName = async (value: string) => {
    const isValid = validateField(value);
    const newUrl = new URLSearchParams(searchParams);

    if (!isValid && value.trim() === "") {
      newUrl.delete("name");
      router.refresh();
    } else {
      newUrl.set("name", value);
    }
    router.push(`${pathname}?${newUrl.toString()}`);
  };

  const debounce = useDebouncedCallback(handleSearchByName, 1000);

  return (
    <div className="w-[100%] md:w-[40%] lg:w-[30%] h-[3rem] flex justify-center items-center  bg-white dark:bg-dark_blue border shadow-md rounded-lg">
      <label>
        <IoIosSearch color="gray" />
      </label>
      <Input
        className="w-[80%] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:opacity-50 border-none dark:bg-dark_blue "
        placeholder="Search for a country..."
        onChange={(event) => debounce(event.target.value)}
        defaultValue={searchParams.get("name"?.toString()) || ""}
      />
    </div>
  );
};
