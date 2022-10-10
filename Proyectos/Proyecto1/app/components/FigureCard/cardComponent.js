

export const getCard = ({id,name,image,writtings,schoolMaster}) => {
    return `
    <figure id="card_${id}" class="card ${name}">
      <h2 title="${name}">${name}</h2>
      <img src="${image}" alt="${name}">
      <figcaption><p>${schoolMaster}</p><p>${writtings}</p></figcaption>
    </figure>
    `
}