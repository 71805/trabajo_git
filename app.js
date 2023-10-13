const numeros = [1, 35, 6, 54, 13, 3, 24];

const productoTotal = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log("Producto de todos los numeros: " + productoTotal);

const mayoresA10 = numeros.filter((e) => e >  10);
console.log("Numeros: " + numeros);
console.log("Mayores a 10: " + mayoresA10);

const numerosX10 = numeros.map((e) => e * 10);
console.log("Numeros * 10: " + numerosX10);

const numerosSuma7 = numeros.map((e) => e + 7);
console.log("Numeros + 7: " + numerosSuma7);

const letras = ["B", "C", "D", "F", "G", "H", "J"];
const numerosConcatena = letras.map((letras, indice) => letras + numerosSuma7[indice]);
console.log("Letras: " + letras);
console.log("Letras + Numeros (+7): " + numerosConcatena);

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
console.log("El numero mas grande: " + resultado);

//Hola comentario...
