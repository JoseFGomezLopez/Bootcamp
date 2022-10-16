let mapArray;
export const pokeApi = async () => {
  try {
    mapArray = new Array();
    let arrayPockemon = new Array();
    for (let i = 1; i < 152; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      arrayPockemon.push(data);
    }
    // console.log(arrayPockemon);
    for (const pockemon of arrayPockemon) {
      mapArray.push({
        id: pockemon.id,
        name: pockemon.name,
        height: pockemon.height,
        image: pockemon.sprites.front_default,
        location: pockemon.location_area_encounters,
        experience: pockemon.base_experience,
        typeName: pockemon.types[0].type.name,
        typeImage : pockemon.abilities[0].ability.name,
      });
    }
  } catch (error) {}

  return mapArray;
};
