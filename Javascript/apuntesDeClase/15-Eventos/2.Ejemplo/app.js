
const createBtn = document.createElement("button");
const themeBtn = document.createElement("button");

createBtn.innerText = "Crear elemento";
themeBtn.innerText = "Cambiar tema";

const createBox = () => {
    const box = document.createElement("div");
    box.classList.add(box);
    document.body.appendChild(box);
}

document.body.appendChild(createBtn);
