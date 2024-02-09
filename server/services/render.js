// Import axios module for making HTTP requests
const axios = require('axios');

// Function to handle rendering of home page
exports.homeRoutes = (req, res) => {
    // Make a GET request to /api/users endpoint
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            // If request is successful, render 'index' view with data received from the API
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            // If an error occurs during the request, send the error as response
            res.send(err);
        });
}

// Function to render 'add_user' view
exports.add_user = (req, res) =>{
    // Render the 'add_user' view
    res.render('add_user');
}

// Function to render 'update_user' view with data of a specific user
exports.update_user = (req, res) =>{
    // Make a GET request to /api/users endpoint with query parameter 'id' to retrieve specific user data
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            // If request is successful, render 'update_user' view with data of the specific user
            res.render("update_user", { user : userdata.data});
        })
        .catch(err =>{
            // If an error occurs during the request, send the error as response
            res.send(err);
        });
}