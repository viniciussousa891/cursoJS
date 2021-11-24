const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* O metodo filter */

/* 
recebe uma função de callback que vai iterar sobre todos os itens do array. Caso o callback retorne true para o elemento do array, esse valor será incluído no array que será retornado pelo metodo filter  
*/ 

const a2 = a1.filter(value => value > 10);

console.log(a1);
console.log(a2);

/* exemplo com callback externos */

/* 
1ª Parametro => O valor do array: esse valor será cada valor presente no array, já que filter itera sobre todos os valores 

2ª Parametro => Indice: Corresponde ao indice do valor que está sendo iterado

3ª Parametro => array: Corresponde ao próprio array completo que está sendo iterado, caso seja necessário o uso dele
*/

let indices = [];

function callbackFilter(valor, indice, array){
    if (valor > 10) {
        indices.push(indice); // Adicionar os indices dos valores > 10 no array indices.
        return true;
    }
}
const a3 = a1.filter(callbackFilter);
console.log(a3, indices);

console.log('EXEMPLO 02')
/* EXEMPLO 02 */

// Retorne a pessoa que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const nome5Letras = pessoas.filter(object => object.nome.length >= 5);

const pessoas50Anos = pessoas.filter(object => object.idade > 50);

const nometerminaComA = pessoas.filter(object => object.nome.toLocaleLowerCase().endsWith('a'));


console.log(nome5Letras);
console.log(pessoas50Anos);
console.log(nometerminaComA);