import { CountriesData, CountryDetails } from "@/types";

export const getCountries = async (
  param?: string
): Promise<CountriesData[] | CountryDetails[]> => {
  if (param) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${param}`, {
      cache: "force-cache",
    });
    const result: CountryDetails[] = await res.json();
    return result;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`, {
    cache: "force-cache",
  });
  const result: CountriesData[] = await res.json();

  return result;
};
