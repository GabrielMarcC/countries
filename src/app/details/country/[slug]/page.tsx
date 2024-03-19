import { CountriesDetails } from "@/components/CountriesDetails";
import { CustomButton } from "@/components/ui/custom-button";

export default function Details({ params }: { params: { slug: string } }) {
  const decodedCountry = decodeURIComponent(`${params.slug}`)
    .trim()
    .toLocaleLowerCase();

  return (
    <div className="w-full min-h-screen mt-[5.5rem]">
      <CustomButton />
      <CountriesDetails param={decodedCountry} />
    </div>
  );
}
