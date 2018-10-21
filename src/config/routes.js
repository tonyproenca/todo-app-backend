const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router) 

    //TODO Routers
    const todoService = require('../api/todo/todoService')

    //Register - NodeRestful - Seta para a URL /todos todos os metodos, get, post, delete, put 
    todoService.register(router, '/todos')
}