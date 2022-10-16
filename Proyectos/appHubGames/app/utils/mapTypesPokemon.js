import { pokeApi} from "../services/pokeApiService";
export const pokemonTypes = async() => {
    const arrayData = await pokeApi();
    const pokemonTypes = arrayData.map((element)=>element.typeName);
    const setTypes = new Set(pokemonTypes);
    const types = Array.from(setTypes);
    return types;
}

