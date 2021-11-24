// Retorne a soma do dobro de todos os pares
// filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [1,2,3,4,5];

const result = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce(((acumulator, value) => acumulator += value), 0);

console.log(result);