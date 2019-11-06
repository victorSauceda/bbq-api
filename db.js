const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
module.exports = connectToDatabase = () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    console.log('=> using new database connection');
    return mongoose.connect("mongodb+srv://victor:Mafiamoves1@cluster0-f9uqq.mongodb.net/test?retryWrites=true&w=majority")
        .then(db => {
            isConnected = db.connections[0].readyState;
        });
};