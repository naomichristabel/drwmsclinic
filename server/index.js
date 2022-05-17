require("dotenv").config();

const express = require("express");

const app = express(); 
const port = `${process.env.PORT}` || 3001;
const http = require("http").Server(app);
const path = require("path");
const routes = require('./routes/appointment-routes');
const connection = require('./db/connection');

connection.connectToServer( function( err, client ) {
  if (err) console.log(err);
  
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// for deployment
app.use(express.static(path.resolve(__dirname, "./../client/build")));
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./../client/build", "index.html"));
})

http.listen(port, () => console.log(`Listening on port ${port}`));

} );

