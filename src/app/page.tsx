"use client";

import { CountriesCards } from "@/components/CountriesCards";
import { SearchCountry } from "@/components/SearchCountry";
import { SelectFilter } from "@/components/SelectFilter";
import { useChangeData } from "@/hooks/useChangeData";
import { CountriesData } from "@/types";

export default function Home() {
  const { data } = useChangeData();

  return (
    <main className="w-full flex min-h-screen justify-center items-center flex-col  px-6 lg:px-14  ">
      <div className="w-full lg:flex-row  lg:justify-between lg:items-center flex flex-col justify-center items-start gap-10 mt-[5.5rem]">
        <SearchCountry />
        <SelectFilter />
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-8 lg:gap-20 xl:gap-16 pt-[4rem] xl:grid xl:grid-cols-4 pb-8">
        {data &&
          data.map((countries: CountriesData, index: number) => {
            return <CountriesCards data={countries} key={index} />;
          })}
      </div>
    </main>
  );
}
