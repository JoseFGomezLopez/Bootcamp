
import { pokeApi } from "../../services/pokeApiService";
import { pockeCard } from "../../components/PockemonCards/pockeCard";

export const filterPlacePokemons = async(select) => {
  const pokemons = await pokeApi();
  console.log(pokemons);
  const filteredPokemons = pokemons.filter(
    (element) => element.location == select);
  const container = document.querySelector(".container");
  container.innerHTML = "";
  filteredPokemons.forEach(element => {
    container.innerHTML += pockeCard(element)})
};
