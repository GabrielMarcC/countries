type Name = {
  common: string;
  native_name: NativeName;
};

type NativeName = {
  [name: string]: string;
};

type Flags = {
  png: string;
  alt: string;
};

export interface CountriesData {
  [x: string]: any;
  flags: Flags;
  name: Name;
  population: number;
  region: string;
  capital: string[];
}

type Languages = {
  [name: string]: string;
};

export interface CountriesDetails extends CountriesData {
  region: string;
  sub_region: string;
  languages: Languages;
  curriences: { currency: string };
}
