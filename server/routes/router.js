// Importing express module and creating a Router instance
const express = require('express');
const route = express.Router();

// Importing services for rendering views and controller for handling API requests
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 *  When a GET request is made to the root route "/", 
 *  it will invoke the `homeRoutes` function from the `services` module.
 */
route.get('/', services.homeRoutes);

/**
 *  @description Add Users Route
 *  @method GET /add-user
 *  When a GET request is made to "/add-user", 
 *  it will invoke the `add_user` function from the `services` module.
 */
route.get('/add-user', services.add_user);

/**
 *  @description Update User Route
 *  @method GET /update-user
 *  When a GET request is made to "/update-user", 
 *  it will invoke the `update_user` function from the `services` module.
 */
route.get('/update-user', services.update_user);

// API Routes

/**
 *  @description Create User API Endpoint
 *  @method POST /api/users
 *  When a POST request is made to "/api/users", 
 *  it will invoke the `create` function from the `controller` module.
 */
route.post('/api/users', controller.create);

/**
 *  @description Find Users API Endpoint
 *  @method GET /api/users
 *  When a GET request is made to "/api/users", 
 *  it will invoke the `find` function from the `controller` module.
 */
route.get('/api/users', controller.find);

/**
 *  @description Update User API Endpoint
 *  @method PUT /api/users/:id
 *  When a PUT request is made to "/api/users/:id", 
 *  it will invoke the `update` function from the `controller` module.
 */
route.put('/api/users/:id', controller.update);

/**
 *  @description Delete User API Endpoint
 *  @method DELETE /api/users/:id
 *  When a DELETE request is made to "/api/users/:id", 
 *  it will invoke the `delete` function from the `controller` module.
 */
route.delete('/api/users/:id', controller.delete);

// Exporting the router
module.exports = route;