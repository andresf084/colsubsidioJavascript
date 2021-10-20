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
var numero = 5;
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
console.log(numeroTres);