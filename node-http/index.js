const http = require('http');
const fs = require('fs');
const path = require('path');

const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for ", req.url, "by method ", req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;


        var filePath = path.resolve('./public' + fileUrl);
        const filrExt = path.extname(filePath);
        if (filrExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>404 File Not Found.</h1></body></html>')
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>404 File Not an HTML File.</h1></body></html>')
            return;
        }
    }
});

server.listen(port, hostName, () => console.log("Server running on port 3000"));

