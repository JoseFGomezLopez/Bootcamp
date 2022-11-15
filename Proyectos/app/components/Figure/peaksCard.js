export const peaksCard = ({ name, altitude, first_ascent, image, site }) => {
  return `
    <figure class="peaksCard">
     <h2>${name}</h2>
     <h3>Altitud de ${altitude} m</h3>
     <h4>Coronodo por primera vez por</h4>
     <h4>${first_ascent}</h4>
     <img src="${image}" alt="Pico ${name} con una altitud de ${altitude} metros">
     <figcaption><h3>${site}</h3></figcaption>
    </figure>
    `;
};
