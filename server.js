const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<body><h1>My name is Yusuf.</h1></body>');
    res.end();
});

server.listen(4000);

