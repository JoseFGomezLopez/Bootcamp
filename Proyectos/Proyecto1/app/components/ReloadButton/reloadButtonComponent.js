export const reloadButton = (textContent) =>{
    
    const reloadBtn = document.createElement('button');
    reloadBtn.addEventListener('click',(ev)=>window.location.reload());
    reloadBtn.innerText = textContent;
    reloadBtn.classList.add('reloadButton');
    app.appendChild(reloadBtn);
}