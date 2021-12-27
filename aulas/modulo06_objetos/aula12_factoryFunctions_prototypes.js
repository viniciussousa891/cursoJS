const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  }
} 

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  }
}

const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  });
}

const p1 = criaPessoa("Vinicius", "de Sousa Carvalho");
console.log(p1)