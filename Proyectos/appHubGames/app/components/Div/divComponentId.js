export const divComp = (container,id,className,textContent) => {
    const div = document.createElement('div');
    div.classList.add(className);
    div.setAttribute('id',id);
    div.innerText = textContent;
    container.appendChild(div);
}