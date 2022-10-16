export const locationCard =({name,location}) => {
    
    return `
    <figure class="locationCard">
    <h3>${name}</h3>
    <img src="${location}" alt="${name}">
    </figure>
    `
}