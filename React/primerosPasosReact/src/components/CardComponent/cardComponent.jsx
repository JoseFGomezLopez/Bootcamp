
export const Card = ({character}) => {
    return (
        <div>
        <h2>Id : {character.id}</h2>
        <img src={character.image} />
        <h2>Name : {character.name}</h2>
        <h2>Status : {character.status}</h2>

       </div>
    )
}