// Nas funções geradoras, podemos fazer diversos "retornos" diferentes
// a partir dos yields. para cada chamada da função, um yield é retornado

function* geradora1() {
  // Código qualquer
  yield 'valor 1';
  // Código qualquer
  yield 'valor 2';
  // Código qualquer
  yield 'valor 3';
}

const g1 = geradora1();

for(let i of g1) {
  console.log(i);
}

// contador infinito
function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);

// delegar de uma função geradora para outra
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
console.log("Delegar");
for (let i of g4){
  console.log(i);
}
