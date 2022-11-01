import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Card from "../components/Card";


const Movies = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(0);
  const [movie,setMovie] = useState([]);
  
useEffect(() => {
  const getServerMovies = async() => {
     const res = await fetch('http://localhost:3000/movies')
     const data = await res.json();
     setMovie(data);
     
  }
  getServerMovies()
}, [])

const createMovie = (e) => {
    
  e.preventDefault();
    
  const movie = {
      title : title,
      image : image,
      year : year,
      id : uuidv4
    }
    
   postMovies(movie);
  }

 const postMovies = async(item) => {
  axios({
    method : "post",
    url:"http://localhost:3000/movies",
    data:item,
  })
  
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
            type="number"
            id="year"
            name="year"
            onChange={(e) => setYear(e.target.value)}
          />
        </fieldset>
        <input type="submit"/>
      </form>
      <Card movies={movie}/>
      </div>
  );
};

export default Movies;
