const mongoose = require('mongoose');

const departamentSchema = new mongoose.Schema(
    {
      name : {type: String, required : true},
      miembros: [{type: mongoose.Schema.Types.ObjectId, ref:'user', required: true}],
    },
    {
      timestamps: true,  
    }
)

const Departament = mongoose.model('departament',departamentSchema);

module.exports = Departament;