"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SelectFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (value: string) => {
    const newUrl = new URLSearchParams(searchParams);
    const formatValue = value.toLowerCase();

    if (formatValue === "clear") {
      newUrl.delete("region");
      router.refresh();
    } else {
      newUrl.set("region", formatValue);
    }
    router.push(`${pathname}?${newUrl.toString()}`);
  };

  return (
    <Select onValueChange={(value) => handleChange(value)}>
      <SelectTrigger className="w-[180px] dark:bg-dark_blue ring-0 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Clear">Clear</SelectItem>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">America</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
