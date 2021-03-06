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
//console.log(parrafo);

//appendChild('<child>');
//Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especifico
//Child -> hijo y es una referencia hacia un nodo existente en el documento actual
document.body.appendChild(parrafo);

//1 actividad sin modificar el html, crear un nodo en el DOM
//con la etiqueta que ustedes quieren y añadirlo en el 2 section del documento
//2 actividad modificar el html con solo un atributo y añadir
//el elemento creado en la linea 36 al primer section en el documento

//innerHTML;
//Propiedad devuelve o estable la sintaxis HTML describiendo los descendientes del elemento
//Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva
//Como rescato el contenido HTML
//Sintaxis -> <elemento>.innerHTML
console.log(parrafos[0].innerHTML);
//Como cambio el contenido del HTML
//parrafos[0].innerHTML = 'nuevo Parrafo';
parrafos[0].innerHTML = `<strong>nuevo Parrafo</strong>`;

//innerText
//La única diferencia con innerHTML, es que esta me trata todo como un string
//a diferencia del innerHTML que me reconoce la sintaxis de elementos HTML
parrafos[1].innerText = `<strong>nuevo Parrafo</strong>`;

//style
//Propiedad para agregar estilos a un nodo
parrafos[1].style.color = 'red';
parrafos[1].style.background = 'yellow';
parrafos[1].style.font = 'italic bold 20px arial,serif';

//setAttribute(<nombreAtributo>,<valorAtributo>)
//Establecer el valor de un atributo en el elemento indicado. Si el atributo
//existe, el valor es actualizado, pero si no existe, añade el atributo con
//el valor.
const articulo = document.getElementsByTagName('article');
articulo[0].setAttribute('id', 'articulo');

const input = document.getElementsByTagName('input');
//DOM false -> disabled
//input[0].setAttribute('disabled', '');
input[0].setAttribute('type', 'date');
input[0].setAttribute('type', 'text');

//removeAttribute('<nombreAtributo>')
//Si deseo eliminar un attributo
input[0].removeAttribute('type');
input[0].removeAttribute('id');

//getAttribute('<nombreAtributo>')
//Obtener un atributo en especifico de un elemento
console.log(input[0].getAttribute('id'));
//""

//classList('<nombreClase>')
//Nos permite acceder a las clases CSS de un elemento, puedo añadir, quitar
//o alternar clases.
//adicionar clases utilizo .add('<nombreClase>')
console.log(input[0].classList);
input[0].classList.add('red');
input[0].classList.add('blue');
input[0].classList.add('green');
console.log(input[0].classList);
//eliminar clases utilizo .remove('<nombreClase>')
input[0].classList.remove('green');

function cambiar(evento) {
    console.log(evento);
};

function cliquear() {
    console.log("se ejecuto el evento porque modifique hice click en el input");
};

function cambiarDesdeHTML(loquesea) {
    console.log(loquesea);
}

//Eventos
//manera como podemos interactuar con nuestra aplicacion
/*input[0].addEventListener('change', cambiar)
input[0].addEventListener('click', cliquear)*/

/*input[0].addEventListener('change', function (event) {
    console.log('Este evento se disparo', event.target.value);
})*/
input[0].addEventListener('click', function (event) {
    console.log(event);
})

//cuando mi pagina es cargada
/*window.addEventListener('load', function() {
    alert('La pagina fue cargada');
})*/