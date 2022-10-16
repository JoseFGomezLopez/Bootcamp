export const inputComponent = (container,className,type,placeholder) => {
    const input = document.createElement('input');
    input.classList.add(className);
    input.type = type;
    input.placeholder = placeholder;
    container.appendChild(input);
};
