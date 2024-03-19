import { getCountries } from "@/services/getCountries";

export const CountriesDetails = async ({ param }: { param: string }) => {
  const data = await getCountries(`/name/${param}?fullText=true`);

  return <div>Teste {param}</div>;
};
