const express = require('express');
const cors = require('cors');

const { connect } = require('./database/connect');
const { routerAbs } = require('./utils/routerAbs')

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
    const title = req.params.title;
    const objectFound = movies.filter((object)=>object.title === title);
    if(objectFound.length===0) {res.status(404).json('Not Found')
    }else{
    res.status(200).json(objectFound);
}})

router.get('/:genre',async(req,res)=>{
    
    const {genre} = req.params;
    const movies = await Movie.find({genre : genre});
    if(movies){res.send('Not Found')
    }else{
    res.send(movies);    
    }
})

server.use('/',router);

const PORT = process.env.PORT;

server.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`);
})