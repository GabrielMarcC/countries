type NamesCode = {
  official: string;
  common: string;
};

type NativeNames = {
  [languageCode: string]: NamesCode;
};

export interface CountryName {
  common: string;
  nativeName: NativeNames;
}

type Flags = {
  png: string;
  alt: string;
};

export interface CountriesData {
  [countryCode: string]: any;
  flags: Flags;
  name: CountryName;
  population: number;
  region: string;
  capital: string[];
}

type Languages = {
  [languageCode: string]: string;
};

type CurrencyName = {
  name: string;
};

type Currency = {
  [currency: string]: CurrencyName;
};

export interface CountryDetails extends CountriesData {
  subregion: string;
  languages: Languages;
  currencies: Currency;
  tld: string[];
  borders: string[];
}
