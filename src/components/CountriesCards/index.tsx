"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { CountriesData } from "@/types";
import { useRouter } from "next/navigation";
import { formatPopulation } from "@/utils/formatPopulation";

type Props = {
  data: CountriesData;
};

export const CountriesCards = ({ data }: Props) => {
  const router = useRouter();

  const nextPage = (countryName: string) => {
    router.push(`/details/country/${countryName}`);
    router.refresh();
  };

  const population = formatPopulation(data.population);

  return (
    <Card className="w-[100%] h-[380px] rounded-lg dark:bg-dark_blue">
      <div className="w-full h-auto">
        <Image
          src={`${data.flags.png}`}
          width={400}
          height={300}
          alt={`${data.flags.alt}`}
          className="rounded-md h-[200px]"
          priority
        />
      </div>
      <CardContent className="p-4">
        <CardTitle
          onClick={() => nextPage(data.name.common)}
          className="hover:underline cursor-pointer"
        >
          {data.name.common}
        </CardTitle>
        <CardContent className="flex flex-col justify-start mt-[1.5rem] p-0">
          <span className="font-bold">
            Population:
            <span className="font-normal"> {population}</span>
          </span>
          <span className="font-bold">
            Region:
            <span className="font-normal"> {data.region}</span>
          </span>
          <span className="font-bold">
            Capital:
            <span className="font-normal"> {data.capital}</span>
          </span>
        </CardContent>
      </CardContent>
    </Card>
  );
};
