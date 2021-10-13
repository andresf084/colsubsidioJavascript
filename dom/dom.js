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

//document.getElementById(<id>)
//Metodo me retorna todo un elemento HTML (nodo) cuyo atributo id es igual al que le pasamos como parametro
console.log(document.getElementById('heading'));
//Para traer contenido usamos la propiedad innerHTML
console.log(document.getElementById('heading').innerHTML);