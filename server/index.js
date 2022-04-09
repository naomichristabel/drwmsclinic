require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const http = require("http").Server(app);
const routes = require('./routes/appointment-routes');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

http.listen(port, () => console.log(`Listening on port ${port}`));
