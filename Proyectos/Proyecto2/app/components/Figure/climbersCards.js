export const climberCard = ({ name, image, year }) => {
  return `
 <figure class="climberCard">
 <h2>${name}</h2>
 <img src="${image}">
 <p>Consiguió ascender todos los 8000 en ${year}</p>
 </figure>
 `;
};
