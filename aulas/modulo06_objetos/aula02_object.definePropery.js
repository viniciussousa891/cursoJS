/* defineProperty - defineProperties */
// Elas travam uma ou mais propriedades do objeto para
// que não possam ser modificadas

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Motra a chave
        value: estoque, // valor da chave
        writable: false, // Se eu posso editar ou não o valor
        configurable: false // se eu posso apagar ou reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Motra a chave
            value: estoque, // valor da chave
            writable: true, // Se eu posso editar ou não o valor
            configurable: false // se eu posso apagar ou reconfigurar a chave
        },
        preco: {
            enumerable: true, // Motra a chave
            value: preco, // valor da chave
            writable: true, // Se eu posso editar ou não o valor
            configurable: false // se eu posso apagar ou reconfigurar a chave
        },
    });
}

const p1 = new Produto("Camiseta", 20, 3);