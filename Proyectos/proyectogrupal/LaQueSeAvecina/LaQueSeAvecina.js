

const listCharacter = document.querySelector("#app");

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/laQueAvecina");

    const dataToJson = await response.json();

    transformDataToJson(dataToJson);
  } catch (error) {
    console.log(error);
  }
};

const transformDataToJson = (data) => {
  const dataToPrint = data.map((element) => {
    return {
      characterName: element.characterName,
      image: element.image,
      interpreter: element.interpreter,
      famousQuote: element.famousQuote,
    };
  });
  
  printAquiNo(dataToPrint);
};

const printAquiNo = (arrayMappeado) => {
  listCharacter.innerHTML = "";
  arrayMappeado.forEach((element) => {
    listCharacter.innerHTML += `
        <figure class = "card">
        <div class ="card_title">${element.characterName}</div>
        <div class = "card_subtitle">${element.famousQuote}</div>
        <img src=${element.image} class="image">
        <div class="interpreter">${element.interpreter}</div>
        </figure>`;
  });
  const reload = () => {
    const btn = document.createElement("button");
    btn.classList.add("btn_class");
    btn.innerText = "Home";

    listCharacter.insertAdjacentElement("beforebegin", btn);
    btn.addEventListener("click", () => window.location.reload());
  };
  reload();
};

export const getLaQue = () => {
  getData();
};
