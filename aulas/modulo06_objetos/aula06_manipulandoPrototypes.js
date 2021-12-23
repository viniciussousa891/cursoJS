// new Object -> toda possuem object.prototype
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

// Como fazer para o __proto__ de objB seja objA
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA)


const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC,objB); //Fazendo com que o __proto__ de objC seja o objB


/* OBS - NÃO É RECOMENDADE USAR O __PROTO__ */
/* 
    Isso pode causar problemas de perfomance

    Para capturar o prototype de um objeto, use:

    Object.getPrototypeOf(Objeto)
*/


/* Trabalhando isso com as funções construtoras */
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(taxa) {
    this.preco = this.preco - (this.preco * (taxa / 100));
}

Produto.prototype.reajuste = function(taxa) {
    this.preco = this.preco + (this.preco * (taxa / 100));
}


const p1 = new Produto('Caneca', 100);
p1.desconto(10);
console.log(p1);


console.log("EXEMPLO 2");

const p2 = {
nome: 'Camiseta',
preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);
