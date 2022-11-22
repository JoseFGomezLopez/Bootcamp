const User = require('../models/user.model.js');

const getUsers = async(req,res,next) => {
    try{
    const user = await User.find();
    return res.status(200).json(user);
    }catch(error){
        return next(error);
    }
}

const getUser = async(req,res,next) => {
    try{
      const { id } = req.params;
      const userById = await User.findById(id);
      return res.status(200).json(userById);
    }catch(error){
      return next(error)
    }
}

const postUser = async(req,res,next) => {
     try{
     const user = new User();
     user.name = req.body.name;
     user.age = req.body.age;
     user.userName = req.body.userName;
     const userinDB = await user.save();
     return res.status(201).json(userinDB)
     }catch(error){
        next(error)
     }

}

const updateUser = async(req,res,next) => {
    try{
        const {id} = req.params;
        const user = new User(req.body);
        user._id = id;
        const updateUserToDB = await User.findAndUpdateById(id,user);
        return res.status(200).json(updateUserToDB);
    }catch(error){
        next(error)
    }
}

const deleteUser = async(req,res,next)=>{
    try{
       const { id } = req.params;
       const user = await User.findByIdAndDelete(id)
       return res.status(200).json(user);

    }catch(error){
        return next(error)
    }
}

module.exports = {
    getUser,
    getUsers,
    postUser,
    updateUser,
    deleteUser
}