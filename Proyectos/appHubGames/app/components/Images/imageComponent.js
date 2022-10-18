
export const imageComp = (container,id,className,src) => {
     const img = document.createElement('img');
     img.src = src;
     img.classList.add(className);
     img.id = id;
     img.alt = alt;
    container.appendChild(img);
}