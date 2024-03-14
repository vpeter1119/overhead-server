const mongoose = require('mongoose');
const config = require('./config');

const connect = () => mongoose.connect(
    config.mongodbString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log('Could not connect to db.');
        } else {
            console.log('Connected to db.')
        }
    }
);

module.exports = connect;