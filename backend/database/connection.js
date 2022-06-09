const mongoose = require('mongoose');
const {gym, running, GymModel,RunningModel} = require('../models/schemas');
const {insert} = require('./mongo')

class Connection {
    static connect() {
        return mongoose.connect(this.url, this.options)
        .then((result) => {
            console.log("Connected")
            this.db = mongoose.connection;
            this.db.on('error', console.error.bind(console, 'connection error:'));
            this.db.once('open', function() {
              // we're connected!
            });
        })
        .catch(err => console.log(err));
    }

    static createModels() {
    }
}

Connection.db = null;
Connection.url = 'mongodb://localhost:27017/test'
Connection.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = {
    Connection
}