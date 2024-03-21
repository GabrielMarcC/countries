// "use client";

// import { getCountries } from "@/services/getCountries";
// import { CountriesData } from "@/types";
// import { filterFields } from "@/utils/filterFields";
// import { validateField } from "@/utils/validateField";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";

// export const useChangeData = () => {
//   const [data, setData] = useState<CountriesData[]>([]);

//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const getAll = async (): Promise<void> => {
//       const name = searchParams.get("name") || "";
//       const region = searchParams.get("region") || "";

//       const res = await getCountries();
//       setData(res);

//       const isValid = validateField(name);

//       if (name && isValid) {
//         const filterByName = filterFields(res, name).filteredData;
//         setData(filterByName);
//       } else if (region) {
//         const filterByRegion = filterFields(res, region).filteredByRegion;
//         setData(filterByRegion);
//       }
//     };

//     getAll();
//   }, [searchParams]);

//   return { data };
// };

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

  useEffect(() => {
    const getAll = async () => {
      const name = searchParams.get("name") as string;
      const region = searchParams.get("region") as string;

      const isValid = validateField(name);

      const res = await getCountries();
      let filteredData = res;

      if (name && isValid) {
        filteredData = filterFields(
          res,
          name
        ).filterByNames() as CountriesData[];
      } else if (region) {
        filteredData = filterFields(
          res,
          undefined,
          region
        ).filterByRegions() as CountriesData[];
      }

      setData(filteredData);
    };

    getAll();
  }, [searchParams]);

  return { data };
};
