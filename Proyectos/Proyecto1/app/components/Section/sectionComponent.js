
export const sectionComponent = (className,textContent) => {
     return `
     <section class="${className}">
      <article>
        <p>${textContent}</p>
      </article>
     </section>`      
}

export const sectionObjectContent = ({name,status,description,title},className) => {
    return`
    <section class="${className}">
     <h2>${title}</h2>
     <article>
     ${description}  
     </article>
    </section>
    ` 
}