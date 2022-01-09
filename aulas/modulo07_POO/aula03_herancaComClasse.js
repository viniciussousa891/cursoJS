class DispositivoEletronico {

  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar(){
    if(!this.ligado){
      console.log(`${this.nome} já desligado`);  
      return;
    } 
    this.ligado = false;
  }
}

// Classe celular herdando tudo da classe DispositivoEletronico
class Celular extends DispositivoEletronico {
  constructor(nome, cor, modelo){
    // Chamando o construtor da classe pai para o atributo 'nome'
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi){
    super(nome);
    this.temWifi = temWifi;
  }

  // Caso eu precise de um outro método para ligar, basta criá-lo na classe
  ligar() {
    console.log("Alteração do método ligar");
  }
}

const d1 = new Celular('Samsung', 'preto', 'Galaxy S10');
const t1 = new Tablet('Ipad', true);
console.log(d1);
console.log(t1.ligar());