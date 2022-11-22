const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true},
      price: { type: String, required: true},
      vegan: { type: Boolean},
      image: { type: String, required: true},
    },
    {
      timestamps: true,
    }
)

module.exports = mongoose.model('Dish',dishSchema);