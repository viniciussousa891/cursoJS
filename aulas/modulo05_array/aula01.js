const nomes = ['Eduardo', 'Maria', 'Joana'];
/* Funciona para String, Objetos, Funções */
nomes[2] = 'Joao';
delete nomes[1];
console.log(nomes);


/* Construir array por construtor (POUCO USADO) */

const nomes02 = new Array('Eduardo');

/* valor por referencia */
const novo = nomes;
novo.pop();
console.log(nomes);

/* Copiar os valores de um array para outro */
const novo02 = [...nomes]; /* Operador spread que faz o espalhamento(cópia) dos valores de nomes em novo*/
novo02.pop();
console.log(`Array Novo ${novo02}`);
console.log(`Array Nomes ${nomes}`); 


/* Metódos */

novo.pop(); /* Remove uma posição no final */
novo.push(); /* Adiciona uma posição no final */
novo.shift(); /* Remove um item no incio */
novo.unshift(); /* Adiciona um intem no inicio */

novo.slice(1,-2); 
/* Recorta o array: 
1ªParametro: onde deve iniciar o corte 
2ªParametro: onde deve terminar o corte
OBS: caso seja negativo o 2ª, significa (final - valorNegativo) 
*/

/* String para vetor */
const nome = "Vinícius de Sousa Carvalho";

const VetorNome = nome.split(' '); 
/* Dividi o nome em partes toda vez que encontra um espaço */

const nomeUnido = VetorNome.join(' '); 
/* Uni todos os valores transformando o array em uma string*/
