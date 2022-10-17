export const parragraphComponentId = (container,ide,className,textContent) => {
    const p = document.createElement('p');
    p.classList.add(className);
    p.innerText = textContent;
    p.setAttribute('id',ide);
    container.appendChild(p);
}