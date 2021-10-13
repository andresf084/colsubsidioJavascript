//Document Object Model
//Modelo de Objetos del Documento
//DOM por si solo no es de gran utilidad
//Por medio de JS puedo acceder al DOm de mi pagina web

//window
//a mi ventana

//document
//mi documento html
//console.log(document);

//element
//A un nodo de tipo 'element' que hace parte del DOM
//console.log(document.body);
console.log(document.getElementById('parrafo')['innerHTML']);

//console.log(document.children);

const elemento = document.createElement('input');
document.body.appendChild(elemento);
elemento.value = 'DOM';