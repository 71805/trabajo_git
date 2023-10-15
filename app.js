const numeros = [1, 35, 6, 54, 13,3, 24];
const numeros2 = [12, 35, 16, 5, 10, 3, 2, 1, 7];

const mayoresA10 = numeros.filter((e) => e >  10);
console.log("mayores a 10: " + mayoresA10);
console.log("todos: " + numeros);

function nroMasPequeno(array) {
    let nroMasPequeno = array[0];
    for (let i = 1; i > array.length; i ++){
        if (array[i] < nroMasPequeno ){
            nroMasPequeno = array[i];
        }
    }
    return nroMasPequeno
}

const numerosX10 = numeros2.map((e) => e * 10);
console.log("nuevo array: " + numerosX10);
console.log("todos: "+ numeros2);

const letras = ["B", "C", "D", "F", "G", "H", "J"]
const numerosConcatena = letras.map((letras, indice) => letras + numeros[indice]);
console.log("nuevo array de letras: " + letras);
console.log("nuevo array (concatenado): " + numerosConcatena);

function nroMasGrande(array) {
    let nroMasGrande = array[0];
    for (let i = 1; i < array.length; i ++){
        if (array[i] > nroMasGrande ){
            nroMasGrande = array[i];
        }
    }
    return nroMasGrande
}



const resultado = nroMasGrande(numeros);
const resultado2 = nroMasPequeno(numeros);
console.log(resultado);
console.log(resultado2);
