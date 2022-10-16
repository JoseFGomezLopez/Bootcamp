export const buttonComponent = (
  container,
  className,
  textContent,
  title,
  evento,
  callBack
) => {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.innerText = textContent;
  btn.title = title;
  btn.addEventListener(evento, callBack);
  container.appendChild(btn);
};
