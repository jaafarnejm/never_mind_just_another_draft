var md5 = require('md5');

var fs = require('fs');

fs.readFile('todo1 fichier a crypter.txt', function (err, data) {
var hashedText = md5(data);
console.log(hashedText);
});

