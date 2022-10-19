export const divCompLiteral = (container,id,className,textContent) => {
    const div = document.createElement('div');
    div.classList.add(className);
    div.setAttribute('id',id);
    div.innerHTML = textContent;
    container.appendChild(div);
}