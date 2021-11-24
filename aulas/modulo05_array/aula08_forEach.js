const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


/* For OF */
for (let valor of a1){
    console.log(valor);
}

console.log("forEach");

/* ForEach */
// Itera sobre todos os valores do array
a1.forEach((valor, indice, array) => console.log(valor, indice))