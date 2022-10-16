import { pokeApi } from "../../services/pokeApiService";
import { pockeCard } from "../../components/PockemonCards/pockeCard";

export const filterTypes = async (select) => {
  const pokemons = await pokeApi();
  const filteredPokemons = pokemons.filter(
    (element) => element.typeName == select
  );
  console.log(filteredPokemons);
  const container = document.querySelector(".container");
  container.innerHTML = "";
   filteredPokemons.forEach((element)=> 
    container.innerHTML += pockeCard(element)) 
};
