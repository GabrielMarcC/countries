import { CountriesData, CountriesDetails } from "@/types";

export const getCountries = async (
  param?: string
): Promise<CountriesData[] | CountriesDetails[]> => {
  if (param) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${param}`, {});
    const result: CountriesDetails[] = await res.json();
    return result;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`, {
    cache: "force-cache",
  });
  const result: CountriesData[] = await res.json();

  return result;
};
