

//Creando nuevos elementos

const div = document.querySelector("div");

const newH1 = document.createElement("h1");
const textH1 = document.createTextNode("Titulo insertado con createTextNode");

div.appendChild(newH1);
newH1.appendChild(textH1);
document.body.appendChild(newH1);
document.body.appendChild(textH1);

const htmlDiv = document.querySelector("#container");

htmlDiv.innerHTML = `
 <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
 </ul>`; 

 document.body.insertBefore(newH1,htmlDiv);

