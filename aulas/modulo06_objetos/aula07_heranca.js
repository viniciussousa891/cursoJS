function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome,preco,cor) {
    Produto.call(this, nome, preco); // chamando uma função dentro de outra, permitindo pegar as Chaves como herança
    this.cor =  cor;
}
Camiseta.prototype = Object.create(Produto.prototype); 
// Quando executa essa ação, a camiseta perde seu construtor e passa a 
// ser o construtor de produto, pos isso devemos redefinir o construtor 
// de Camiseta na linha abaixo
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('valor inválido');
            }
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Caneca', 20)
const camiseta = new Camiseta('Polo', 100, 'amarela');
const caneca = new Caneca('caneca', 10, 'porcelana', 5);

console.log(produto);
console.log(camiseta);
console.log(caneca);
