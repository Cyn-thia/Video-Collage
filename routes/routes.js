const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.post('/recVideo', controller.recVideo);            //route to save recorded videos
routes.post ('/layout', controller.layout);               //route to post new collage
routes.get('/collage/:id', controller.show);              //route to play collage

// routes.get('/video', controller.video);                   //route to play 1 vid???

module.exports = routes;
