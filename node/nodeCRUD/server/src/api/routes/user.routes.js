const userRoutes = require('express').Router();

const {
    getUser,
    getUsers,
    postUser,
    deleteUser,
    updateUser
} = require('../controllers/user.controller')

userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUser)
userRoutes.post('/', postUser)
userRoutes.patch('/:id', updateUser)
userRoutes.delete('/:id', deleteUser)

module.exports = userRoutes;