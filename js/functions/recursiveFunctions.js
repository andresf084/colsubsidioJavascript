//FUncion Recursiva
//Es una funcion que se invoca varias veces asi misma, hasta que para en algun punto.
let funcionRecursiva = function(numero) {
    if(numero === 0) {
        return;
    }

    //console.log(numero);
    return funcionRecursiva(numero - 1);
}

//funcionRecursiva(5);

var informacion = {
    perfil: {
        name: "Gustavo",
        apellido: "Garcia",
        edad: 32
    },
    estudio: {
        primaria: {
            colegio: "Liceo Colombia"
        },
        secundaria: {
            colegio: "Liceo Santa Barbara"
        }
    }
};

function iterarInternamenteObjeto(objeto) {
    if(typeof objeto !== 'object') {
        return;
    }

    for(const propiedad in objeto) {
        console.log((typeof objeto[propiedad] !== 'object')?`  ${propiedad}: ${objeto[propiedad]}`:`${propiedad}`);
        iterarInternamenteObjeto(objeto[propiedad]);
    }
}

iterarInternamenteObjeto(informacion);