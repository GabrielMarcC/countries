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

export function SelectFilter() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] dark:bg-dark_blue ring-0 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="America">America</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europa">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
