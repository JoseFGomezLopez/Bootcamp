import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
};

// const addOptionsToColorPicker = () => {
//   const colorPickerSelect = document.querySelector("#color-picker");

//   Object.keys(COLOR_PALETTE).forEach((color) => {
//     const option = document.createElement("option");
//     option.value = color;
//     option.innerText = COLOR_PALETTE[color];

//     colorPickerSelect.append(option);
//   });
// };

// addOptionsToColorPicker();

const addEventListenerToColorPicker = () => {
  
  const colorPickerSelect = document.querySelector(".color-picker");
  
  const colorName = document.querySelector("#color-name");
  
  colorPickerSelect.addEventListener("input", (event) => {
    
    const newColor = event.target.value;
    
    document.body.style.background = newColor;

    colorName.innerText = colorPickerSelect.value; //COLOR_PALETTE[newColor];
    // const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    // colorName.innerText = colorNameText;
  });
};

addEventListenerToColorPicker();

document.querySelector("#app").innerHTML;
