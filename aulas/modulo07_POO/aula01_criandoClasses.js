class Pessoa {  
  // Construtor
  constructor(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // Método
  falar(){
    console.log(`${this.nome} está falando`);
  }

}

// Para classe, não é necessário definir os metodos no prototype,
// pois já é feito automaticamente

const p1 = new Pessoa('Vinícius', 'de Sousa Carvalho', 19);
p1.falar();