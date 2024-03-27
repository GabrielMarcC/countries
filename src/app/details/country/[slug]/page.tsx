export const revalidate = 5;

import { CountryDetail } from "@/components/CountryDetail";
import { CustomButton } from "@/components/ui/custom-button";
import { getCountries } from "@/services/getCountries";
import { CountryDetails } from "@/types";

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
    <div className="w-full min-h-screen mt-[2.5rem] p-5 flex flex-col  items-center">
      <CustomButton />
      <div className="w-full flex items-center justify-center pb-9">
        {data &&
          data.map((country, index) => {
            return (
              <CountryDetail data={country as CountryDetails} key={index} />
            );
          })}
      </div>
    </div>
  );
}
