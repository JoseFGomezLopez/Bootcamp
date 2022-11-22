const Dish = require('./dish.model');
const { setError } = require('../../helpers/errors');
const { deleteFile } = require('../../middlewares/delete-file')

const getAllDishes = async (req, res, next) => {
    try{ 
    const allDishes = await Dish.find();
     return res.json({
        status:200,
        message: "All dishes",
        data: allDishes,
     });
    }catch(error){
        return next(setError(500, error.message | 'Dishes not found'));
    }
}

const createDish = async () => {
    try {
        const dish = new Dish(req.body);
        if(req.file) {
            dish.image = req.file.path;
        }
        const dishInDB = await dish.save();
        return res.json({
            status: 200,
            message: "Dish created",
            data: dishInDB,
        })
    } catch (error) {
        next(setError(500, error.message | 'Failed in dish creation'))
    }
}

const patchDish = async (req, res, next) => {
    try {
        const { id } = req.params;

        const patchDishDB = new Dish(req.body);

        patchDishDB._id = id;
        const dishDB = await Dish.findByIdAndUpdate(id, patchDishDB);

        if(req.file){
            deleteFile(dishDB.image);
            patchDishDB.image = req.file.path;
        }
        
        if(!dishDB) {
            return next('Dish not found');
        }

        return res.json({
            status: 200,
            new: patchDishDB,
            old: dishDB,
             

        })
    } catch (error) {
        return next(setError(500, error.message | 'Failed in dish update'))
    }
}

const removeDish = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedDish = await Dish.findByIdAndDelete(id);
        if(deletedDish.image){
            deleteFile(deletedDish.image);
        }
        if(!deletedDish){
            return next(setError(400, 'Dish not found'))
        }
        return res.json({
            status: 200,
            message: 'Dish deleted',
            data: deletedDish,
        })
    } catch (error) {
        return next(setError(500, error.message | 'Failed in dish delection'));
    }
}

module.exports = {
    getAllDishes,
    createDish,
    patchDish,
}