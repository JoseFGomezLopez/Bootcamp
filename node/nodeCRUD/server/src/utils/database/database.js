const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const connect = async () => {
  try {
    const database = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = database.connection;
    console.log(`http://localhost:${PORT}`)  
} catch (error) {
    console.log("Conexion fallida", error);
  }
};

module.exports = connect;
