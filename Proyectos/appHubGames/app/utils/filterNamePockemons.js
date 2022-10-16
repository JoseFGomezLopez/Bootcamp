import { pokeApi } from "../services/pokeApiService";
import { pockeCard } from "../components/PockemonCards/pockeCard";

export const inputPokeFilter = async(word) => {
 
    const pokemons = await pokeApi();
    
    const filteredPokemons = pokemons.filter((element)=>element.name.toLowerCase().includes(word.toLowerCase()));   
    
    const container = document.querySelector('.container');
    container.innerHTML= ''
    filteredPokemons.forEach(element => {
        container.innerHTML += pockeCard(element);    
    });
    
}