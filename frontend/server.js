//Load HTTP module
require('dotenv').config();
const http = require("http");
const express = require('express')
const User =  require('./models/user')
const session = require("express-session");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {Connection} = require('./database/connection')

const passport = require("passport");
const next = require("next");
const uid = require('uid-safe');

const router = require('./routes')


const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "."
});
const handle = app.getRequestHandler();



app.prepare().then(() => {
    const server = express();
    Connection.connect();

    require('./authentication/init');

// support parsing of application/json type post data
    server.use(bodyParser.json());

    //support parsing of application/x-www-form-urlencoded post data
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use(morgan('combined'))


    server.use(router);


    // handling everything else with Next.js
    server.get("*", handle);
  
    http.createServer(server).listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  });
  
