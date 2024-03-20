import { CountriesData } from "@/types";

export const filterFields = (
  countries: CountriesData[],
  countryName: string
) => {
  const filterByName = countries.filter((country) => {
    const formatCountry = countryName.toLowerCase();
    const formatData = country.name.common.toLowerCase();

    return formatData.startsWith(formatCountry);
  });

  const filterByRegion = countries.filter((country) => {
    const formatCountry = countryName.toLowerCase();
    const formatData = country.name.common.toLowerCase();

    return formatCountry === formatData;
  });

  return { filterByName, filterByRegion };
};
