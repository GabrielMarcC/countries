import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Country } from "@/data/mockData";

type Props = {
  data: Country;
};

export const CountriesCards = ({ data }: Props) => {
  return (
    <Card className="w-[100%] h-[380px] rounded-lg dark:bg-dark_blue hover:cursor-pointer">
      <Image
        src={
          "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
        }
        width={400}
        height={300}
        alt="bandeira do Brasil"
        className="rounded-md"
      />
      <CardContent className="p-4">
        <CardTitle>{data.name}</CardTitle>
        <CardContent className="flex flex-col justify-start mt-[1.5rem] p-0">
          <span className="font-bold">
            Population: <span className="font-normal">{data.population}</span>
          </span>
          <span className="font-bold">
            Region: <span className="font-normal">{data.region}</span>
          </span>
          <span className="font-bold">
            Capital: <span className="font-normal">{data.capital}</span>
          </span>
        </CardContent>
      </CardContent>
    </Card>
  );
};
