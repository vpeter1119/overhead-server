const mongoose = require('mongoose');
const config = require('./config');

console.log(config.mongodbString);

const createConnection = () => mongoose.createConnection(
    config.mongodbString,
    // { useNewUrlParser: true, useUnifiedTopology: true },
    // (err) => {
    //     if (err) {
    //         console.log('Could not connect to db.');
    //     } else {
    //         console.log('Connected to db.')
    //     }
    // }
);

module.exports = createConnection;