export const randomColor = () => {
  var a = Math.floor(Math.random() * 251);
  var b = Math.floor(Math.random() * 251);
  var c = Math.floor(Math.random() * 251);
  document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
};
