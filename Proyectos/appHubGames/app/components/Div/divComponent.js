export const divComp = (container,className,textContent) => {
    const div = document.createElement('div');
    div.classList.add(className);
    div.innerText = textContent;
    container.appendChild(div);
}