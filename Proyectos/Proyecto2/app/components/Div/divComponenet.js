export const divFill = (container, className) => {
  const div = document.createElement("div");
  div.classList.add(className);
  container.appendChild(div);
};
