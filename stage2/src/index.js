const express = require('express');
const dbConnect = require('../config/dbConfig');
const cors = require('cors');
const PersonRoutes = require('./routes/person.routes');

const app = express();

dbConnect();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', PersonRoutes);

module.exports = app;