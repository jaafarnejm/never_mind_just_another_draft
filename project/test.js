var md5 = require('md5');
//text à crypter
var clairText = "i like nodejs"
//invoquer la fonction md5 pour hasher le text
var hashedText = md5(clairText);
//afficher le hash
console.log(hashedText)
