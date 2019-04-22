const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
 var db = require('../database/mysql.js');

const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here
app.get('/styles', function(req, res){
  db.getStyles((err, results) => {
     if(err) {
       console.log('eror conecting to the database');
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})

module.exports = app;
