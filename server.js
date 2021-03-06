//Load HTTP module
require('dotenv').config();
const http = require("http");
const express = require('express')

const session = require("express-session");
const MongoStore = require("connect-mongo")
const {Connection} = require('./backend/database/connection')

const User =  require('./backend/models/user')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')

const passport = require("./backend/authentication/init");

const next = require("next");

const router = require('./routes')

Connection.connect();


const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "./frontend"
});
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();

    // Express Session
    server.use(
      session({
          secret: "very secret this is",
          resave: false,
          saveUninitialized: true,
          store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
      })
    );

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


    // handling everything else with Next.js
    server.get("*", handle);
  
    http.createServer(server).listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  });
  
