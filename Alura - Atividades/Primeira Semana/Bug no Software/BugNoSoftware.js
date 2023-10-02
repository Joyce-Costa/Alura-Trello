var raio = 3.5; 
var altura = 1.6; 


var areaBase = Math.PI * Math.pow(raio, 2);

var volumeMetrosCubicos = areaBase * altura;


var volumeLitros = volumeMetrosCubicos * 1000;

console.log("A piscina suportará " + volumeLitros + " litros de água.");
