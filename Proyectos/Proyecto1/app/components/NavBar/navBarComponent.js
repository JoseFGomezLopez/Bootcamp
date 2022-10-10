
export const getNavBar = (idName,className,textOption,textOption2,textOption3 = '') => {
    return `
      <nav id="${idName}" class="${className}">
        <ul>
          <li>${textOption}</li>
          <li>${textOption2}</li>
          <li>${textOption3}</li>
        </ul>
      </nav>
    ` 

}