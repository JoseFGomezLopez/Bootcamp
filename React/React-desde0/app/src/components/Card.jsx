import {Link} from 'react-router-dom'


const Card = (movies) => {
  return (
    <div className="moviesGallery">
      <h2>Gallery</h2>
       <div className="gallery">
        {movies.length ? (
            movies.map((item)=>(
        <figure key={item.id}>
            <Link to={`/movie/${movies.id}`}>           
            <h2>item.title</h2>
            </Link>
        </figure>))
        ):(<h1>no movies</h1>)}
       </div>
    </div>
  )
}

export default Card