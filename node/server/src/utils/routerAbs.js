const express = require('express');
const router = express.Router();

const routerAbs = (param,model) => {

    router.get(`/:${param}`,async(req,res)=>{
    const  paramReq  = req.params.title;
    const element = await model.find();
    const objectFound = element.filter((object)=>object[param] === paramReq);
    if(objectFound.length===0) {res.send('Not Found')
    }else{
    res.send(objectFound);
}})
}

module.exports  = { routerAbs };