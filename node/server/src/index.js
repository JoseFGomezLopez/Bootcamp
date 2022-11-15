const express = require('express');
const cors = require('cors');

const { connect } = require('./database/connect');


const Movie = require('./models/movie')

connect();

const server = express();

server.use(cors());

const router = express.Router();

router.get('/',async(req,res)=>{
    const movies = await Movie.find();
    res.send(movies);
})

router.get('/:title',async(req,res)=>{
    const movies = await Movie.find();
    console.log(movies);
    const title = req.params.title;
    console.log(title);
    const objectFound = movies.filter((object)=>object.title === title);
    if(objectFound===-1) {res.send('Not Found')
    }else{
    res.send(objectFound[0].title);
}})

server.use('/',router);

const PORT = process.env.PORT;

server.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`);
})