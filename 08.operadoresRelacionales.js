//Operadores Relacionales

let a = 5;
let b = "5";

// Igualdad (==)
console.log("a == b: --> ", a == b); // true, porque compara solo el valor
console.log(`${a} == ${b}: --> ${a == b}`); // true, porque compara solo el valor
// Igualdad estricta (===)
console.log("a === b: --> ", a === b); // false, porque compara valor y tipo

//String interpolation
console.log(`${a} === ${b}: --> ${a === b}`); // false, porque compara valor y tipo

// Distinto (!=)
console.log(`${a} != ${b}: --> ${a != b}`); // false, porque compara solo el valor

// Distinto estricto (!==)
console.log(`${a} !== ${b}: --> ${a !== b}`); // true, porque compara valor y tipo

// Mayor que (>)
console.log(`${a} > ${b}: --> ${a > b}`); // false, porque 5 no es mayor que 5

// Menor que (<)
console.log(`${a} < ${b}: --> ${a < b}`); // false, porque 5 no es menor que 5

// Mayor o igual que (>=)
console.log(`${a} >= ${b}: --> ${a >= b}`); // true, porque 5 es igual a 5

// Menor o igual que (<=)
console.log(`${a} <= ${b}: --> ${a <= b}`); // true, porque 5 es igual a 5