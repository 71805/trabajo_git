const numeros = [1, 35, 6, 54, 13,3, 24, "A"];

const mayoresA10 = numeros.filter((e) => e >  10);
console.log("mayores a 10: " + mayoresA10);
console.log("todos: " + numeros);

const numerosX10 = numeros.map((e) => e * 10);
console.log("nuevo array: " + numerosX10);
console.log("todos: "+ numeros);

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
console.log(resultado);
