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

//document.getElementById('<id>')
//Metodo me retorna todo un elemento HTML (nodo) cuyo atributo id es igual al que le pasamos como parametro
//console.log(document.getElementById('heading'));
//Para traer contenido usamos la propiedad innerHTML
//console.log(document.getElementById('heading').innerHTML);

//getElementsByTagName('<tagName>')
//Retorna en una lista los elementos con un nombre determinado. Es decir,
//busca en todo el documento, incluyendo el nodo raiz.
//Me retorna en una lista(NodeList) los elementos encontrados en el orden en que aparecen en el árbol.
const parrafos = document.getElementsByTagName('p');
//console.log(parrafos);

//createElement('<tagName>', [options])
//Crea un elemento HTML especifico por su tagName
//Parametros
//<tagName> -> Especifica el tipo de elemento a crear. Por ende, el nodeName
//del elemento es creado con el valor de tagName
//[options] -> contiene una única propiedad llamada is, cuyo valor es el de la etiqueta
//tagName de un elemento personalizado.
const parrafo = document.createElement('p');
console.log(parrafo);

//appendChild('<child>');
//Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especifico
//Child -> hijo y es una referencia hacia un nodo existente en el documento actual
document.body.appendChild(parrafo);