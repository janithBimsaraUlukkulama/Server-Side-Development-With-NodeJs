const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('GET dishes.');
});

app.post('/dishes', (req, res, next) => {
    res.end('Add the dish: ' + req.body.name);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT the dish not suported.');
});

app.delete('/dishes', (req, res, next) => {
    res.end('DELETED dishe.');
});

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('GET dish details for: '+ req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});