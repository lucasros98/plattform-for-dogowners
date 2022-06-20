const mongoose = require('mongoose');

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
}

Connection.db = null;
Connection.url = 'mongodb://localhost:27017/dogplatform'
Connection.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = {
    Connection
}