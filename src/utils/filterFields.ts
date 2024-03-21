import { CountriesData } from "@/types";

export const filterFields = (
  countries: CountriesData[],
  countryName?: string,
  region?: string
) => {
  const filterByNames = () => {
    if (countryName) {
      const formatCountry = countryName.toLowerCase();
      const filteredCountries = countries.filter((country) => {
        const formatData = country.name.common.toLowerCase();
        return formatData.startsWith(formatCountry);
      });

      return filteredCountries;
    }
  };

  const filterByRegions = () => {
    if (region) {
      const formatRegion = region.toLowerCase();
      const filteredRegions = countries.filter((country) => {
        const formatCountryRegion = country.region.toLowerCase();
        return formatCountryRegion === formatRegion;
      });

      return filteredRegions;
    }
  };

  return { filterByNames, filterByRegions };
};
