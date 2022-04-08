require("dotenv").config();

const express = require("express");
const app = express();
const path = require('path'); 
const port = process.env.PORT || 3001;
const http = require("http").Server(app);
const routes = require('./routes/appointment-routes');
// const generatePassword = require('password-generator');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
// app.get('/api/passwords', (req, res) => {
//     const count = 5;
  
//     // Generate some passwords
//     const passwords = Array.from(Array(count).keys()).map(i =>
//       generatePassword(12, false)
//     )
  
//     // Return them as json
//     res.json(passwords);
  
//     console.log(`Sent ${count} passwords`);
//   });


// routes
app.use('/', routes);

http.listen(port, () => console.log(`Listening on port ${port}`));
