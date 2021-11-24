/* EXEMPLO DE ATRIBUIÇÂO VIA DESESTRUTURAÇÂO COM OBJETOS*/

const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Carvalho',
    idade: 19,
    endereco: {
        rua: 'Santa Catarina',
        bairro: 'Arapiraca',
        numero: 49
    }
};
const { nome: nome2, sobrenome, idade } = pessoa; 
// No exemplor nome, o que estou fazendo é criando uma variavel com nome diferente da chave que eu quero pegar no objeto

const {endereco: {rua: r, numero}} = pessoa // Extraindo de um objeto dentro de um objeto e atribuindo nome diferente a variavel que recebe achave rua
console.log(nome2, sobrenome, idade);
console.log(r, numero);