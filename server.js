// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan'); // HTTP request logger middleware
const bodyparser = require("body-parser");
const path = require('path');

// Import the function to connect to the database
const connectDB = require('./server/database/connection');

// Create an Express application
const app = express();

// Load environment variables from config.env file
dotenv.config( { path : 'config.env'} );

// Set the port number for the server
const PORT = process.env.PORT || 8080;

// Middleware to log HTTP requests
app.use(morgan('tiny'));

// Connect to the MongoDB database
connectDB();

// Middleware to parse incoming request bodies
app.use(bodyparser.urlencoded({ extended : true}));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static assets (CSS, images, JavaScript)
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Load routers for handling different routes
app.use('/', require('./server/routes/router'));

// Start the server
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});