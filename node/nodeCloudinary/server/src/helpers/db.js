const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connect = async () => {
  try {
    const database = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = database.connection;
    console.log(`Connected to DB : name ${name} in host ${host}`)
    console.log(`http://localhost:${process.env.PORT}`)
  } catch (error) {
    console.log(`Error Connecting to DB -> ${error}`)
  }
};

module.exports = { connect };
