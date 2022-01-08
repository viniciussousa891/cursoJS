// Nesse exemplo, foi mostrado como usar os getters e setters
// para garantir que alguém não altere as definições que foram
// estabelecidas na classe. 

// Com o getter, capturamos o valor da velocidade (do tipo 
// de da Symbol) 

// com o setter, definimos um novo valor para a velocidade, 
// caso esse valor seja um valor coerente 

const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor){
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar(){
    if(this[_velocidade] >= 100) return; 
    this[_velocidade]++;
  }

  desacelerar(){
    if(this[_velocidade] <= 0) return; 
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');


c1.velocidade = 65;
console.log(c1.velocidade);