export const pockeCard = ({id,name,image,typeName,height,experience}) => {
    
    return `
    <figure class="pockeClass">
    <h3>${name}</h3>
    <h5>Height: ${height}</h5>
    <h5>Experience: ${experience}</h5>
    <img src="${image}" alt="${name}">
    <h5>ID: ${id}</h5>
    <figcaption>Type: ${typeName}</figcaption>
    </figure>
    `
}