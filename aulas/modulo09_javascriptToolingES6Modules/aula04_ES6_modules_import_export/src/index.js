import soma, { nome2 as nome3, sobrenome, idade, Pessoa } from "./modulo1";
// É muito comum dar conflitos de variaveis na importação
// portanto você pode mudar o nome da variavel no momento
// da importação -> "nome2 as nome3"

// Importanto tudo de uma única vez
import * as nomeModulo from './modulo1';
// nomeModulo será um objeto com tudo dentro

console.log(nomeModulo);

const nome = "João";

console.log(nome, nome3, sobrenome, idade);
console.log(soma(2,3));

const p1 = new Pessoa('Vinicius', 'de Sousa Carvalho');
console.log(p1.nome + ' ' + p1.sobrenome);