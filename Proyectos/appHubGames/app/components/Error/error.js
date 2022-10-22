export const errorComponent = () => {
    const error = new Error();
    return `
    <span>
    ${error.name}  
    ${error.message}
    </span>
    `
}