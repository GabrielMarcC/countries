import { CountryDetails } from "@/types";
import { Card } from "../ui/card";
import Image from "next/image";
import { NativeNames } from "./NativeNames";
import { formatPopulation } from "@/utils/formatPopulation";

type Props = {
  data: CountryDetails;
};

export const CountryDetail = async ({ data }: Props) => {
  const population = formatPopulation(data.population);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6  justify-center items-center pt-[3.25rem]">
      <Card className="w-full  flex  items-center border-none shadow-none">
        <Image
          src={`${data.flags.png}`}
          alt={`${data.flags.alt}`}
          width={400}
          height={500}
          priority
          style={{ objectFit: "cover" }}
          className="lg:w-[500px] lg:h-[300px]"
        />
      </Card>
      <div className="w-full h-full lg:[50%] flex flex-col pt-5 lg:pt-0 ">
        <h2 className="font-bold text-[25px] lg:text-[35px] pt-5">
          {data.name.common}
        </h2>
        <div className="w-full  flex flex-col lg:flex-row ">
          <div className="w-full pt-7 flex flex-col gap-2">
            <NativeNames data={data.name} />
            <span>
              <strong>Population</strong>: {population}
            </span>
            <span>
              <strong>Region: </strong>
              {data.region}
            </span>
            <span>
              <strong>Sub Region: </strong>
              {data.subregion}
            </span>
            <span>
              <strong>Capital: </strong>
              {data.capital}
            </span>
          </div>
          <div className="w-full pt-7 flex flex-col gap-2">
            <span>
              <strong>Top level domain: </strong>
              {data.tld}
            </span>
            {Object.keys(data.currencies).map((name, index) => {
              return (
                <span key={index}>
                  <strong>Currencies: </strong>
                  {data.currencies[name].name}
                </span>
              );
            })}
            <div className="w-full flex items-center gap-2">
              <strong>Languages: </strong>
              {Object.keys(data.languages).map((name, index) => {
                return (
                  <span key={index}>
                    {data.languages[name]}
                    {index < Object.keys(data.languages).length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full pt-2">
          <span>
            <strong>Border countries: </strong>
            {data.borders.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};
