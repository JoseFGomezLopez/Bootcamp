export const initButton = (container, textContent, evento, callBack) => {
  const btn = document.createElement("button");
  btn.addEventListener(evento, callBack);
  btn.innerText = textContent;
  container.appendChild(btn);
};
