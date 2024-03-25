export const formatPopulation = (population: number) => {
  const formatter = new Intl.NumberFormat("US");

  const formatedNumber = formatter.format(population);

  return formatedNumber;
};
