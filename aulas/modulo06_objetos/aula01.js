/* Revisando objetos */

/* Objeto literal */
const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Carvalho'
};

/* Tipos de notação */
console.log(pessoa['nome']);
console.log(pessoa.nome);

/* Acessando chave dinamicamente */
const chave = 'nome';
console.log(pessoa[chave]);


/* Criando novo array pelo new */
const pessoa02 = new Object();
pessoa02.nome = 'Zuleide';
pessoa02.sobrenome = 'Sousa';

const chave02 = 'sobrenome';
console.log(pessoa02.nome);
console.log(pessoa02[chave02]);


/* Apagar uma chave */
delete pessoa02.nome;
console.log(pessoa02)


/* funções dentro do objeto (métodos) */
const pessoa03 = {
    nome: 'Vinícius',
    sobrenome: 'Carvalho',
    idade: 19,
    falarNome: function(){
        return `O nome dessa pessoa é: ${this.nome} ${this.sobrenome}`;
    },
    getIdadeNascimento: function() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

console.log(pessoa03.falarNome());
console.log(pessoa03.getIdadeNascimento());


/* For in */
// Aqui, a variável chave se torna a cada iteração uma 
//das chaves de dentro do meu objeto 

for (let chave in pessoa03) {
    console.log(chave);
}

/* Acessar os valores de cada chave com o for in */
for (let chave in pessoa03) {
    console.log(pessoa03[chave]);
}



/* FUNÇÃO PARA CRIAR OBJETOS */
// Factory functions e Constructor functions

// Factory function
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
        // O metodo com Get fica protegido, então não consigo setar ele
    }
}

const p1 = new criaPessoa("Vinícius", "Sousa");
console.log(p1.nomeCompleto);



/* Constructor function */
function Pessoa(nome, sobrenome, idade) {
    
    //Atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    //Atributos privados
    const privado = "Esse é um atributo privado";
    
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    }

    this.dataNascimento = () => {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
    Object.freeze(this); // Trava as chaves do meu objeto
}

const p2 = new Pessoa("Zuleide", "Sousa", "51");
console.log(p2.nomeCompleto());
console.log(p2.dataNascimento());
