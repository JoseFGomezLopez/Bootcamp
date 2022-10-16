import { pockeCard } from "../components/PockemonCards/pockeCard";
import { pokeApi } from "../services/pokeApiService";

export const printPockemosHTML = () => {
  printPockemons();
};
export const mapp = await pokeApi();
const printPockemons = async () => {
  const container = document.querySelector(".container");
  for (const pockemon of mapp) {
  container.innerHTML += pockeCard(pockemon);
  }
};
