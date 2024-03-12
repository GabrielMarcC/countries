import { SearchCountry } from "@/components/SearchCountry";
import { SelectFilter } from "@/components/SelectFilter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 lg:px-9">
      <div className="w-full lg:flex-row lg:px-9  lg:justify-between lg:items-center flex flex-col justify-center items-start gap-10 mt-[5.5rem]">
        <SearchCountry />
        <SelectFilter />
      </div>
    </main>
  );
}
