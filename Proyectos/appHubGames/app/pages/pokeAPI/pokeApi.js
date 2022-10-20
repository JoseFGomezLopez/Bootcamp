import "./pokeApiStyle.css";
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { playRoom } from "../playRoom/playRoom";
import { printPockemosHTML } from "../../utils/PokeApi/printPockeHTML";
import { divComp } from "../../components/Div/divComponent";
import { inputComponent } from "../../components/InputComponent/inputComponent";
import { inputPokeFilter } from "../../utils/PokeApi/filterNamePockemons";
import { selectComp } from "../../components/Select/selectComponent";
import { selectCompV } from "../../components/Select/selectComponentVariante";
import { pokemonTypes } from "../../utils/PokeApi/mapTypesPokemon";
import { filterTypes } from "../../utils/PokeApi/filterTypesPokemons";
import { pokemonLocation } from "../../utils/PokeApi/mapLocationsPokemon";
import { filterPlacePokemons } from "../../utils/PokeApi/filterRegionPokemon";
import { pokeApi } from "../../services/pokeApiService";

export const getpokeAPI = async () => {
  const divContainer = document.querySelector("#app");
  divContainer.innerHTML = "";
  buttonComponent(divContainer,"reloadButton","HOME","reloadPlayRoom","click",(ev) => playRoom());
  divComp(divContainer, "divSelectores", "");
  const logo = document.querySelector('.divSelectores');
  logo.addEventListener('click',async(ev) =>await getpokeAPI())
  inputComponent(divContainer, "inputBusqueda", "text", "Introduce un nombre!");
  const types = await pokemonTypes();
  selectComp(divContainer, "pokemonTypes", "selectTypes", types);
  const location = await pokemonLocation();
  const mapArray = await pokeApi();
  selectCompV(divContainer, "pokemonLocation", "selectLocations", location);
  divComp(divContainer, "container", "");
  printPockemosHTML();
  const input = document.querySelector(".inputBusqueda");
  input.addEventListener(
    "input",
    async (ev) => await inputPokeFilter(input.value)
  );
  const select = document.querySelector(".selectTypes");
  select.addEventListener(
    "change",
    async (ev) => await filterTypes(ev.target.value)
  );
  const selectLocation = document.querySelector(".selectLocations");
  selectLocation.addEventListener(
    "change",
    async (ev) => await filterPlacePokemons(ev.target.value)
  );
};
