import "./pokeApiStyle.css";
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { playRoom } from "../playRoom/playRoom";
import { printPockemosHTML } from "../../utils/printPockeHTML";
import { divComp } from "../../components/Div/divComponent";
import { inputComponent } from "../../components/InputComponent/inputComponent";
import { inputPokeFilter } from "../../utils/filterNamePockemons";
import { selectComp } from "../../components/Select/selectComponent";
import { selectCompV } from "../../components/Select/selectComponentVariante";
import { pokemonTypes } from "../../utils/mapTypesPokemon";
import { filterTypes } from "../../utils/filterTypesPokemons";
import { pokemonLocation } from "../../utils/mapLocationsPokemon";
import { filterPlacePokemons } from "../../utils/filterRegionPokemon";
import { pokeApi } from "../../services/pokeApiService";

export const getpokeAPI = async () => {
  const divContainer = document.querySelector("#app");
  divContainer.innerHTML = "";
  buttonComponent(
    divContainer,
    "reloadButton",
    "HOME",
    "reloadPlayRoom",
    "click",
    (ev) => playRoom()
  );
  divComp(divContainer, "divSelectores", "");
  inputComponent(divContainer, "inputBusqueda", "text", "Introduce un nombre!");
  const types = await pokemonTypes();
  selectComp(divContainer, "pokemonTypes", "selectTypes", types);
  const location = await pokemonLocation();
  const mapArray = await pokeApi();
  selectCompV(divContainer, "pokemonLocation", "selectLocations", location,mapArray);
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