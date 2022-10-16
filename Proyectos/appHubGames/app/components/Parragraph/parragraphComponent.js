export const parragraphC = (container,className,textContent) => {
    const p = document.createElement('p');
    p.classList.add(className);
    p.innerText = textContent;
    container.appendChild(p);
}