const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const compression = require('compression');
const cookiesParser = require('cookie-parser');

const app = express();

app.use(compression());

app.use(cookiesParser())

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('secretKey', process.env.SECRET_KEY_JWT);


require('../routes')(app);

app.disable('x-powered-by');

module.exports = app;
