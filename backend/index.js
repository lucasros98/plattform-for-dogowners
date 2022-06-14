//Load HTTP module
const http = require("http");
const express = require('express')
const router = require('./routes')
const {Connection} = require('./database/connection')
const morgan = require('morgan')


const hostname = 'localhost';
const bodyParser = require('body-parser')
const port = 6090;
const app=express();


Connection.connect();


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//Logging
app.use(morgan('combined'))


app.use('/', router);


//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
