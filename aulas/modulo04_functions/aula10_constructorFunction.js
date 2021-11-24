/* Função construtora retorna objetos */

function Pessoa(nome, sobrenome) {
    
    // Atributos privados
    const ID = 123456;
    const metodoInterno = () => {
        console.log('Sou um método privado');
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Vinícius', 'Sousa');
console.log(p1.sobrenome);
p1.metodo();