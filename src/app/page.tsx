import { SearchCountry } from "@/components/SearchCountry";
import { SelectFilter } from "@/components/SelectFilter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-[80%] flex flex-col justify-center items-start gap-10">
        <SearchCountry />
        <SelectFilter />
      </div>
    </main>
  );
}
