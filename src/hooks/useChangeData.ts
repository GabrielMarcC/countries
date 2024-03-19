"use client";

import { CountriesData } from "@/types";
import { validateField } from "@/utils/validateField";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Countries } from "@/types";

export const useChangeData = () => {
  const [data, setData] = useState<CountriesData[]>([]);

  const searchParams = useSearchParams();
  const name = searchParams.get("name") as string;

  useEffect(() => {
    const getCountries = async (name: string): Promise<void> => {
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`);
      const res: CountriesData[] = await data.json();
      setData(res);

      const isValid = validateField(name);

      if (isValid && name === typeof Countries) {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/name/${name}?fullText=true`
        );
        const res: CountriesData[] = await data.json();

        setData(res);
      }
    };

    getCountries(name);
  }, [name, data]);

  return { data };
};
