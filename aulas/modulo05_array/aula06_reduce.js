const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);

/* EXEMPLO 1 */
// Some todos os valores

const total = numeros.reduce(function(acumulador, valor) {
    return acumulador += valor;
}, 0);

console.log('EXEMPLO 1');
console.log(total);

/* EXEMPLO 2 */

// Retorne um array com os pares

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); 

console.log('EXEMPLO 2');
console.log(pares);


/* EXEMPLO 3 */

// Retorne um array com o dobro dos valores (map)

const dobro = numeros.reduce((acumulador, valor) =>{
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log('EXEMPLO 3');
console.log(dobro);


/* EXEMPLO 3 */

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]

const maisVelho = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador; 
    return valor;
});

console.log('EXEMPLO 4');
console.log(maisVelho);