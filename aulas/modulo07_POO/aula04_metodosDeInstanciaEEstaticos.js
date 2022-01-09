class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    if(this.volume === 100) return;
    this.volume += 2;
  }

  dimunuirVolume() {
    if(this.volume === 0) return;
    this.volume -= 2;
  }

  // Método de instância
  trocaPilha() {

  }

  // Método estático que só pertence a classe e não pertence as intâncias delas
  // (os objetos dessa classe)
  static trocaSenha() {
    console.log('Funcionando');
  }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaSenha();