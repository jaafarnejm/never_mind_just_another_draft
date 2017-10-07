var sum={};
//la fonction calculate est un attribue de l'objet sum
sum.calculate = function (n) {
return (n*(n+1))/2;
}
//pour qu'on puisse utiliser cette fonction on doit exporter ce module
module.exports = sum;
