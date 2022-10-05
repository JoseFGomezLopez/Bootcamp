
import './styles.css'

export const initHeader = () => {
  const container = document.querySelector(`#app`);
  container.innerHTML = `
  <header>
   <nav>
    <ul class ="navItems">
     <li><a href = "mailto:fontanadeoro1983@gmail.com">Contact</a></li>
     <li>Sitios de interés
      <ul> 
       <li class = "desplegable"><a href ="https://kaosenlared.net/">Kaos en la Red</a></li>
       <li class = "desplegable"><a href ="http://barcelona.indymedia.org/">Indymedia Barcelona</a></li>
       <li class = "desplegable"><a href ="http://klinamen.org/">Klinamen</a></li>
      </ul>
     </li>
     <li><img src = "../public/fuego2.jpg"></li>
   </ul>
   </nav>
  </header>`;
  }