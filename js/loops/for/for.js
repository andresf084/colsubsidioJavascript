/*
 Bucle
 For
*/
//For
//Sintaxis -> for(iterator; condition; end) {code}
//iterator -> declaracion de una variable y se usa para 
//inicializar la iteracion
//condition ->  Se ejecuta el <code> siempre y cuando 
//la condicion sea verdadera
//end -> una expresion final que se evalua cada vez que 
//se ejecuto una iteracion del bucle
//contador++ -> contador = contador + 1;
//contador+2 -> contador = contador + 2;
//contador-4 -> contador = contador - 4;
for(var contador = 1; contador <= 3; contador++) {
    console.log(contador);
}

var ciudades = ['Bucaramanga', 'Cali', 'Bogota', 'Valledupar', 'Barranquilla'];

//Por favor imprimir los valores de las posiciones pares
//de la siguiente forma
//'posicion <posicionArreglo> es par y su valor es <valorDelaPosicionDelArreglo>'
//y los valores de las posiciones impares
//de la siguiente forma
//'posicion <posicionArreglo> es impar y su valor es <valorDelaPosicionDelArreglo>'
//modulo -> %
//ejemplo de utilizar modulo: 3%2=1; 2%2=0 
for(var posicionTemporalCiudades = 0; posicionTemporalCiudades < ciudades.length; posicionTemporalCiudades++){
    if(posicionTemporalCiudades%2==0){
        console.log(`posicion ${posicionTemporalCiudades} es par y su valor es ${ciudades[posicionTemporalCiudades]}`)
    }
    else if (posicionTemporalCiudades%2==1){
        console.log(`posicion ${posicionTemporalCiudades} es impar y su valor es ${ciudades[posicionTemporalCiudades]}`)
    }
}

/*
Matriz
*/
var dosDimensiones3x3 = [[0,1,2], [3,4,5], [6,7,8]];
/*
Deben utilizar bucles
suma diagonales
    0 1 2
    3 4 5
    6 7 8
En consola:
-> La suma de la diagonal es <sumaDiagonales>
*/