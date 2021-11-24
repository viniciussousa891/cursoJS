/* Metodo concat */
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2)
console.log(a3)

/* Utilizando o spread operator */
const a4 = [...a1, ...a2];
console.log(a4);
const a5 = [...a1, ...a2, 'String', ...[7, 8, 9]];
console.log(a5) 