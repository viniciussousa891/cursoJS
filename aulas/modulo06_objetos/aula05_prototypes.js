// Constructor -> molde (classe)

/* 
JavaScript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que 
foi criado pela primeira vez, servindo de modelo ou molde 
para futuras produções.

todos osobjetos tem uma referência interna para um protótipo
(__proto__) que vem da propriedade prototype da função 
construtora que foi usada para cria-lo. Quando tentamos acessar
um membro de um objeto e depois a cadeia de protótipos é usada 
até o topo (null) até encontrar (ou não) tal membro.  
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + sobrenome;


// instância
const pessoa1 = new Pessoa('Vinícius', 'Sousa');
const pessoa2 = new Pessoa('Zuleide', 'Sousa');