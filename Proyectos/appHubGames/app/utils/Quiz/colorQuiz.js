export const randomColor = (className) => {
    var a = Math.floor(Math.random() * 251);
    var b = Math.floor(Math.random() * 251);
    var c = Math.floor(Math.random() * 251);
    const answerDiv = document.querySelector(className)
    answerDiv.style.backgroundColor = `rgb(${a},${b},${c})`;
  };