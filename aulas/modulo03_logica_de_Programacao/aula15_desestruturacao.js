/* EXEMPLO DE ATRIBUIÇÂO VIA DESESTRUTURAÇÂO*/

 let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];


[a, b, c] = letras; //Atribuição via desestruturação

console.log(a, b, c); 


/* EXEMPLO DE ATRIBUIÇÂO VIA DESESTRUTURAÇÂO 2 */

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [primeiroNumero, segundoNumero, ...resto] = numeros;  // Quando eu declaro a variavel com os 3 pontos (...) ela pegará todo o resto do array
console.log(primeiroNumero, segundoNumero);
console.log(resto)

 
/* EXEMPLO DE ATRIBUIÇÂO VIA DESESTRUTURAÇÂO 3 - Pulando valores no array */

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [um, , tres, , cinco, , sete , ...resto] = numeros; 
console.log(um, tres, cinco, sete, resto);