const DishRoutes = require('express').Router();
const upload = require('../../middlewares/file');

const {
    getAllDishes,
    createDish,
} = require('./dish.controller');

DishRoutes.get('/',getAllDishes);
DishRoutes.post('/',upload.single("image"),createDish);

module.exports = DishRoutes;