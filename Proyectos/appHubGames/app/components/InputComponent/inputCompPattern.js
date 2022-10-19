export const inputComponentPattern = (container,className,type,placeholder,pattern) => {
    const input = document.createElement('input');
    input.classList.add(className);
    input.type = type;
    input.placeholder = placeholder;
    input.pattern = pattern;
    container.appendChild(input);
};