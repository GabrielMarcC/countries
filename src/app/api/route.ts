import { CountriesData } from "@/types";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`);
    const data: CountriesData[] = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error to fetch data:", error);
  }
}
