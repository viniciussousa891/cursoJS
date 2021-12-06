const nomes = ['vincius','sousa','carvalho','francileide','givaldo','carvalho'];


/* O retorno da função splice é um array com os valores removidos */
/* Caso não tenha removidos, retornará um array vazio */
/* 
1ª Argumento: O indice do primeiro elemento que eu quero mexer 
2ª Argumento: Quantos elemntos eu quero remover do meu array
3ª Argumento e próximos: elementos que eu queira adicionar 
*/
const removidos = nomes.splice(4 , 1);  /* Removendo do indice 4, 1 elemento */
console.log(nomes);
console.log(removidos); /* Splice retorna um array com os removidos */


/* Removendo com indice negativo */
const nomes2 = ['vincius','sousa','carvalho','francileide','givaldo','carvalho'];
const removidos2 = nomes2.splice(-2 , 2);  /* Removendo do indice -2, 2 elementos */
console.log(removidos2);

/* Adiconando elementos */
const nomes3 = ['vincius','sousa','carvalho','francileide','givaldo','carvalho'];
const removidos3 = nomes3.splice(3 , 0, 'adicionado');  /* Iniciando do indice 3, removendo 0 elementos e adiconando */
console.log(nomes3, removidos3);