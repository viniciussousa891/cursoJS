const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


/* Map */
/* 
O map itera sobre todos os valores do array, 
modificando-os e retorna um array de igual tamanho 
*/

/* 
1ª Parametro => O valor do array: esse valor será cada
valor presente no array, já que filter itera sobre todos 
os valores 

2ª Parametro => Indice: Corresponde ao indice do valor 
que está sendo iterado

3ª Parametro => array: Corresponde ao próprio array 
completo que está sendo iterado, caso seja necessário 
o uso dele
*/


/* EXEMPLO 01 */
// Dobre os numeros

const dobro = numeros.map(elemento => elemento * 2);
console.log('EXEMPLO 01');
console.log(numeros);
console.log(dobro);

/* EXEMPLO 02 */
// Retorne apenas uma string com o nome da pessoa
// Remova aoenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]


const nomes = pessoas.map(function(valor) {
    return valor.nome;
});

const idades = pessoas.map( obj => ({idade: obj.idade})); // Crio um novo objeto apenas com idade

const addId = pessoas.map((obj, index) => {
    const newObj = {...obj};
    newObj.id = index;
    return newObj;
});

console.log('EXEMPLO 02');
console.log(nomes);
console.log(idades);
console.log(addId);
