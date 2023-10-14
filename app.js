const numeros = [1, 35, 6, 54, 13,3, 24];

const mayoresA10 = numeros.filter((e) => e >  10);
console.log("mayores a 10: " + mayoresA10);
console.log("todos: " + numeros);

const numerosX10 = numeros.map((e) => e * 10);
console.log("nuevo array: " + numerosX10);
console.log("todos: "+ numeros);
