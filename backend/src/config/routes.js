const express = require('express');

module.exports = function(server) {

    //API Routes
    const router = express.Router();
    server.use('/api', router);

    //TODO Service
    const TodoService = require('../api/todo/todoService');
    TodoService.register(router, '/todos');
};