//ECMAScript 6 - ECMASCript 2015
//cont, let
//var - variable es global
//Mutable - Puede cambiar en el tiempo
//Inmutable - Es una constante, es decir, no puede cambiar en el tiempo

//var - es una variable global
//Esta esta supeditada a la funcion que la contiene
/*for(var posicionTemporal = 0; posicionTemporal <= 10; posicionTemporal++) {
    console.log(posicionTemporal);
}
console.log(`Esta es una variable global ${posicionTemporal}`);*/

//let - es una variable local
//Esta esta supeditada al bloque de codigo que la contiene
/*for(let posicionTemporalDos = 0; posicionTemporalDos <= 10; posicionTemporalDos++) {
    console.log(posicionTemporalDos);
}
console.log(`Esta es una variable global ${posicionTemporalDos}`);*/

//const - es una constante
//Funciona igual que un let, es decir, esat supeditada al bloque de codigo que la contiene
//con la unica diferencia que es una variable inmutable
/*for(const posicionTemporalTres = 0; posicionTemporalTres <= 10; posicionTemporalTres++) {
    console.log(posicionTemporalTres);
}
console.log(`Esta es una variable global ${posicionTemporalTres}`);*/

//Pequeña entrevista para desarrollador junior
/*var numero = 5;
var numeroDos = 10;

if(numero === 5) {
    let numeroTres = 4;
    var numeroDos = 1;

    console.log(numero);
    console.log(numeroDos);
    console.log(numeroTres);
}

console.log(numero);
console.log(numeroDos);
console.log(numeroTres);*/

//const
//Es una variable inmutable en su valor
/*const entero = 10;
entero = 15;
console.log(entero);*/
/*const cadena = "hola";
cadena = "mundo";
console.log(cadena);*/
/*let hola = "hola";
let mundo = "bienvenidos";
mundo = "mundo";
const template = `${hola} ${mundo}`;
console.log(template);*/
/*const arreglo = [0,1,2,3,4];
arreglo.push("5");
console.log(arreglo);*/
/*const objeto = {};
objeto.name = "Gustavo";
objeto.age = 32;
objeto.age = "32";
console.log(objeto);*/

//Funciones Flechas
//Escribir con mas azucar sintatico una funcion
//No tienen su prpio alcance, es decir, no tienen this
//No se pueden utilizar como metodos contructores (porque no tienen su propio alcance)

//Funcion en bloque
/*function saludar() {
    return "Hola mundo";
}
console.log(saludar());*/

//La palabra reservada function, ya no existe
//<nombreFuncion> = (<parametros>) => <retorno>
saludar = () => "Hola Mundo";
console.log(saludar());

let funcion = function() {
    return "Vivo en Combia";
}
console.log(funcion());