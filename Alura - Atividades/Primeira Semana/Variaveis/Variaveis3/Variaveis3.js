var a = 40;
var b = 30;

console.log("Valor inicial de 'a': " + a);
console.log("Valor inicial de 'b': " + b);

var temporaria = a;
a = b;
b = temporaria;


console.log("Valor de 'a' após a troca: " + a);
console.log("Valor de 'b' após a troca: " + b);

console.log(temporaria)