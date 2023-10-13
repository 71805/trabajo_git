const numeros = [1, 35, 6, 54, 13, 3, 24];

<<<<<<< HEAD
const productoTotal = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
=======
const productoTotal = numeros.reduce((acumulador, numero) => acumulador * numero, 1)
>>>>>>> 040ab15bee3a481939dc866dec0b52e85f10dbdc
console.log("Producto de todos los numeros: " + productoTotal);

const mayoresA10 = numeros.filter((e) => e >  10);
console.log("Numeros: " + numeros);
console.log("Mayores a 10: " + mayoresA10);

const numerosX10 = numeros.map((e) => e * 10);
console.log("Numeros * 10: " + numerosX10);

const numerosSuma7 = numeros.map((e) => e + 7);
console.log("Numeros + 7: " + numerosSuma7);

<<<<<<< HEAD
const letras = ["B", "C", "D", "F", "G", "H", "J"];
const numerosConcatena = letras.map((letras, indice) => letras + numerosSuma7[indice]);
console.log("Letras: " + letras);
console.log("Letras + Numeros (+7): " + numerosConcatena);
=======
const letras = ["a", "b", "c", "d", "e", "f", "g"]
const numerosConcatena = letras.map((letras, indice) => letras + numeros[indice]);
console.log("nuevo array de letras: " + letras);
console.log("nuevo array (concatenado): " + numerosConcatena);
>>>>>>> 040ab15bee3a481939dc866dec0b52e85f10dbdc

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
