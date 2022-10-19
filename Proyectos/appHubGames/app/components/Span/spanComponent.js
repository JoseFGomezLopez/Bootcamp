
export const spanComponent = (container,id,className,texContent) => {
    const span = document.createElement('span');
    span.id = id;
    span.classList.add(className);
    span.innerText = texContent;
    container.appendChild(span);
}