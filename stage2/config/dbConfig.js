const mongoose = require('mongoose');
const { DB_URL } = require('./config');

const dbConnection = () => {
    mongoose.set('strictQuery', false);

    mongoose.connect(DB_URL);

    mongoose.connection.on('connected', () => {
        console.info('Database connected successfully');
    });

    mongoose.connection.on('error', (error) => {
        console.info('An error occurred');
        console.error(error);
    });
};

module.exports = dbConnection;