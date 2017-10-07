var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    displayHome(res);
}).listen(3000);
console.log("server listening on 3000");

function displayHome(res) {
    fs.readFile('home.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}
