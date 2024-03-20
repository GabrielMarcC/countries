import { CountriesData, CountriesDetails } from "@/types";

export const getCountries = async (
  param?: string
): Promise<CountriesData[] | CountriesDetails[]> => {
  if (param) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${param}`);
    const result: CountriesData[] = await res.json();
    return result;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`);
  const result: CountriesData[] = await res.json();

  return result;
};
