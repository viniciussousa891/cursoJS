/* 
O Polimorfismo serve para que eu possa alterar o 
comportamento de por exemplo, um método em uma subclasse 
de algo. No exemplo, a conta corrente tem comportamento 
diferente do que a poupança no ato de sacar 
*/ 


// Superclass
function Conta(agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(this.saldo < valor){
  console.log(`Saldo Insuficiente`);
  this.verSaldo()
  return;
  }
  this.saldo -= valor;
  console.log(`Saque de R$${valor}`);
  this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
  console.log(`Deposito no valor de R$${valor}`);
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function() {
  console.log(`Seu saldo é de R$${this.saldo.toFixed(2)}`);
}

// Criando uma subclasse
function CCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); // herança dos atributos
  this.limite = limite;
}

CCorrente.prototype = Object.create(Conta.prototype); // Herança dos métodos
CCorrente.prototype.constructor = CCorrente;

// Sobrescrevendo o método
CCorrente.prototype.sacar = function(valor) {
  if((this.saldo + this.limite) < valor){
    console.log(`Saldo Insuficiente para saque`);
    this.verSaldo()
    return;
  }

  this.saldo -= valor;
  console.log(`Saque de R$${valor}`);
  this.verSaldo();
}

// Criando segunda subclasse
function CPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo); // herança dos atributos
}

CPoupanca.prototype = Object.create(Conta.prototype); // Herança dos métodos
CPoupanca.prototype.constructor = CPoupanca;


const c1 = new CCorrente('11', '17', 500, 100);
console.log(c1);

const c2 = new CPoupanca('10', '22', 500);
console.log(c2);