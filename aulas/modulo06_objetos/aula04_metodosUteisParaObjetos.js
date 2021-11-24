// Copiar os valores de um objeto para outro, sem que seja um ponteiro
const produto = {nome: 'Caneca', preco: 5}
const p2 = {...produto};

console.log(produto);
console.log(p2);

p2.preco = 9;
console.log(produto);
console.log(p2);

/* Object.assign - Copia um objeto para outro*/
// Object.assign( {objeto vazio}  ,  objetoACopiar   ,  {objeto com novas chaves, caso tenha} );
console.log("EXEMPLO 02");

const produto03 = {nome: 'camiseta', preco: 60}
const p3 = Object.assign({}, produto03, {materia: 'Porcelana'});
console.log(produto03);
console.log(p3);

/* Copiar apenas uma propriedade */
const produto04 = {nome: 'camiseta', preco: 60}
const p4 = { nome: produto.nome};


/* Object.keys - Retorna um array com as chave no produto */
const produto05 = {nome: 'camiseta', preco: 60}
const p5 = { ...produto05};

let chaves = Object.keys(produto05);
console.log(chaves);



/* Object.freeze - Impede que o objeto seja alterado */
console.log("EXEMPLO 03 - object.freeze");
const produto06 = {nome: 'camiseta', preco: 60};
Object.freeze(produto06);
produto06.nome = 'texto';
console.log(produto06);



/* Object.defineProperty() - Define uma propriedade (ultimas 2 aulas) */
/* Object.defineProperties() - Define várias propriedades (ultimas 2 aulas) */



/* Object.getOwnPropertyDescriptor - retorna as propriedades de uma chave*/
console.log("EXEMPLO 04 - Object.getOwnPropertyDescriptor");
const produto07 = {nome: 'camiseta', preco: 60};
console.log(Object.getOwnPropertyDescriptor(produto07, 'nome'));

/* Object.values()  retorna um array com os valores de cada chave */
console.log("EXEMPLO 05 - Object.values");
const produto08 = {nome: 'camiseta', preco: 60};
console.log(Object.values(produto08));

/* Object.entries - retorna um array contendo chave e valor */
console.log("EXEMPLO 05 - Object.values");
const produto09 = {nome: 'camiseta', preco: 60};
console.log(Object.entries(produto09));

for (let [chave, valor] of Object.entries(produto09)) {
    console.log(chave, valor);
}
