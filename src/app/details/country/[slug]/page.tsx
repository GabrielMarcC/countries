export const revalidate = 5;

import { CountryDetail } from "@/components/CountryDetail";
import { CustomButton } from "@/components/ui/custom-button";
import { getCountries } from "@/services/getCountries";
import { CountriesDetails } from "@/types";

export default async function Details({
  params,
}: {
  params: { slug: string };
}) {
  const decodedCountry = decodeURIComponent(`${params.slug}`)
    .trim()
    .toLocaleLowerCase();

  const data = await getCountries(`/name/${decodedCountry}?fullText=true`);

  return (
    <div className="w-full min-h-screen mt-[5.5rem]">
      <CustomButton />
      {data &&
        data.map((country, index) => {
          return (
            <CountryDetail data={country as CountriesDetails} key={index} />
          );
        })}
    </div>
  );
}
