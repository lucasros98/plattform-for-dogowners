//Load HTTP module
require('dotenv').config();
const http = require("http");
var cors = require('cors');
const express = require('express')


const session = require("express-session");
const MongoStore = require("connect-mongo")
const { Connection } = require('./database/connection')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')

const passport = require("./authentication/init");

const next = require("next");

const router = require('./routes')

Connection.connect();

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "localhost"
const PORT = process.env.PORT || 8080


const server = express();

// Express Session
server.use(
  session({
    secret: process.env.JWT_TOP_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
  })
);

var allowedOrigins = ['http://localhost:3000','http://plattform-for-dogowners.vercel.app.com', 'https://plattform-for-dogowners.vercel.app.com']

server.use(cors({
    origin: function (origin, callback) {
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

// Passport middleware
server.use(passport.initialize());
server.use(passport.session());

// support parsing of application/json type post data
server.use(bodyParser.json());
server.use(cookieParser());


//support parsing of application/x-www-form-urlencoded post data
server.use(bodyParser.urlencoded({ extended: true }));

server.use(router);
router.use(morgan('combined'))


server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});



module.exports = server