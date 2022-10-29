import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Movies = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(0);
  
const createMovie = (e) => {
    e.preventDefault();
    const movie = {
      title : title,
      image : image,
      year : year,
      id : uuidv4
    }
   console.log(movie)
  }




  return (
    <div>
      <form onSubmit={(e)=>createMovie(e)}>
        <fieldset>
          <legend>Movies</legend>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="imagen">Image : </label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="year">Year : </label>
          <input
            type="text"
            id="year"
            name="year"
            onChange={(e) => setYear(e.target.value)}
          />
        </fieldset>
        <input type="submit"/>
      </form>
      <h3>{title}</h3>
      <h3>{year}</h3>
      <h3>{image}</h3>
    </div>
  );
};

export default Movies;
