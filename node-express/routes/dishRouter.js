const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('GET dishes.');
    })
    .post((req, res, next) => {
        res.end('Add the dish: ' + req.body.name);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT the dish not suported.');
    })
    .delete((req, res, next) => {
        res.end('DELETED dishe.');
    });


module.exports = dishRouter;