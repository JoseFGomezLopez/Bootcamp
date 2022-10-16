import { pokeApi} from "../../services/pokeApiService";

export const pokemonLocation = async() => {
    const arrayData = await pokeApi();
    const pokemonTypes = arrayData.map((element)=>{
        return [element.name,element.location]});
    const setLocation = new Set(pokemonTypes);
    const location = Array.from(setLocation);
    return location;
}

