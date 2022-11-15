export const search = (container, type, className, placeholder) => {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.type = type;
  input.classList.add(className);
  container.appendChild(input);
};
