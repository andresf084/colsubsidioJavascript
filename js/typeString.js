//Hay 3 formas de inicializar un string
var primeraForma = "PrimeraForma";
var segundaForma = 'SegundaForma';
var terceraForma = `Esto es un template`;

//concatenacion
console.log(primeraForma + " " + segundaForma);
console.log(`${primeraForma} + ${primeraForma}`);

//Ventajas de un template
primeraForma = "Esto es un mensaje" + "\n" 
+ 'en varias lineas';
console.log(primeraForma);
terceraForma = `Esto es un mensaje
en varias lineas`;
console.log(terceraForma);

//Pasar un tipo de dato a un tipo de dato String
console.log(String(8));