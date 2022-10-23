import { pockeCard } from "../../components/PockemonCards/pockeCard";
import { getPockeApiMapped } from "../../services/pokeApiService";

export const printPockemosHTML = () => {
  printPockemons();
};
export const mapp = getPockeApiMapped();
const printPockemons = () => {
  const container = document.querySelector(".container");
  for (const pockemon of mapp) {
  container.innerHTML += pockeCard(pockemon);
  }
};
