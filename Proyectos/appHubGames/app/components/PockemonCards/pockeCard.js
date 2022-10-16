export const pockeCard = (object) => {
    
    return `
    <figure class="pockeClass">
    <h3>${object.name}</h3>
    <img src="${object.image}" alt="${object.name}">
    <figcaption>${object.typeName}</figcaption>
    </figure>
    `
}