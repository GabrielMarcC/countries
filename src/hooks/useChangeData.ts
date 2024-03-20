"use client";

import { getCountries } from "@/services/getCountries";
import { CountriesData } from "@/types";
import { filterFields } from "@/utils/filterFields";
import { validateField } from "@/utils/validateField";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const useChangeData = () => {
  const [data, setData] = useState<CountriesData[]>([]);

  const searchParams = useSearchParams();
  const name = searchParams.get("name") as string;

  useEffect(() => {
    const getAll = async (name: string): Promise<void> => {
      const res = await getCountries();
      setData(res);

      const isValid = validateField(name);

      if (name && isValid) {
        const filterByName = filterFields(res, name).filterByName;
        setData(filterByName);
      }
    };

    getAll(name);
  }, [name]);

  return { data };
};
