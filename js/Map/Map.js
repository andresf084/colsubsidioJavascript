//Map
/*
Sintaxis
    Crear un map -> let <nombreMap> = new Map();
    Como agregamos valores -> <nombreMap>.set('<llave>', <valor>);
                           -> <nombreMap>.set(<numero>, <valor>);
    Como lo utilizamos -> <nombreMap>.get('llave');
*/
let diccionario = new Map();
diccionario.set('Computadora', 'La computadora1​2​ (del inglés: computer y este del latín: computare,3​ ‘calcular’), también denominada computador4​1​ u ordenador5​ (del francés: ordinateur; y este del latín: ordinator), es una máquina electrónica digital programable que ejecuta una serie de comandos para procesar los datos de entrada, obteniendo convenientemente información que posteriormente se envía a las unidades de salida. Una computadora está formada físicamente por numerosos circuitos integrados y varios componentes de apoyo, extensión y accesorios, que en conjunto pueden ejecutar tareas diversas con suma rapidez y bajo el control de un programa (software).');
diccionario.set(0, true);
diccionario.set('objeto', {nombre: 'Gustavo', apellido: 'Garcia'});
diccionario.set(1, [10,20,30,40,50]);
diccionario.set('null', null);

console.log(diccionario.get('Computadora'));
console.log(diccionario.get(0));
console.log(diccionario.get('objeto'));
console.log(diccionario.get(1));
console.log(diccionario.get('null'));