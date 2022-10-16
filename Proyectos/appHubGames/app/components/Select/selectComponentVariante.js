export const selectCompV = (container, nameSelect, className, arrayOptions) => {
    const label = document.createElement("label");
    label.setAttribute("for", className);
  
    const select = document.createElement("select");
    select.setAttribute("name", nameSelect);
    select.setAttribute("id", className);
    select.classList.add(className);
  
    for (const value of arrayOptions) {
      const option = document.createElement("option");
      select.appendChild(option);
      option.innerText = value[0];
      option.setAttribute('class',`${className}Option`)
      option.setAttribute("value", value[1]);
    }
    container.appendChild(select);
  };
  