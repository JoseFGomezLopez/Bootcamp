const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');

const Movie= require('../models/movie')
const movies = require('../models/movies.seed')

const mongoURI = process.env.MONGO_URI;

const connect = async() => {
    try{
      const dbConnect = await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
      const allMovies = await Movie.find()
      if(allMovies.length) await Movie.collection.drop();
      const moviesSeed = await movies.map(movie=>new Movie(movie));
      await Movie.insertMany(moviesSeed);
      const { name, host } = dbConnect.connection;
      console.log(`conectado a la DB : ${name} en el host${host}`) 
    }catch(error){
      console.log(error)
    }
}

module.exports = { connect }