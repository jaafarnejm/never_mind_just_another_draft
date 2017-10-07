var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var md5 = require('md5');

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        //processAllFieldsOfTheForm(req, res);
        processFormFieldsIndividual(req, res);
    }
});

function displayForm(res) {
    fs.readFile('taf.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}

function processFormFieldsIndividual(req, res) {
    //Store the data from the fields in your data store.
    //The data store could be a file or database or any other store based
    //on your application.
    var pass = "";
    var form = new formidable.IncomingForm();
    form.on('field', function (field, value) {
        console.log(field);
        console.log(value);
        pass = value;
    });

    form.on('end', function () {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
		var hashedpass = md5("123456789");
		//md5(123456789) = 25f9e794323b453885f5181f1b624d0b
		if(md5(pass) == hashedpass){res.end('Authentification reussie');}else{res.end('Reessayez');}
        
    });
    form.parse(req);
}

server.listen(8080);
console.log("server listening on 8080");