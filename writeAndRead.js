const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        let filePath = 'userName.txt';
        fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>'); // Fix: Correct head tag
        res.write(
            `<body><p>${data}</p><form action="/userName" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
        );
        res.write('</html>');
        return res.end();
        });

    }

    if (url === '/userName' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = `${parsedBody.split('=')[1]}<br>`;
          fs.appendFile('userName.txt', message, (err) => {
            if (err) {
              console.error(`Error writing file: ${err.message}`);
              return;
            }
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
    }
})

server.listen(4000)