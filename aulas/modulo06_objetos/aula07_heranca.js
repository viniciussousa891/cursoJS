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
    Produto.call(this, nome, preco); 
    // chamando uma função construtora dentro de outra, permitindo 
    // pegar as Chaves como herança
    this.cor =  cor;
}

// Pegar os métodos dentro do prototype
Camiseta.prototype = Object.create(Produto.prototype); 
// Criando o prototype de Produto dentro do Prototype de Camiseta


// Quando executa essa ação, Camiseta perde seu construtor e passa a 
// ser o construtor de Produto, por isso devemos redefinir o construtor 
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
