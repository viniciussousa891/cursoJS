function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(`Valor Inválido`);
    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}


// Promise.all Promise.race Promise.resolve Promise.reject




const promises = [
  esperaAi('Promise 1', rand(1, 3)),
  esperaAi('Promise 2', rand(1, 4)),
  esperaAi('Promise 3', rand(1, 5)),
];

// Promise.all
/*
  O Promise.all é um método que recebe um array de promises
  e retorna um unico resolve ou reject. A resposta retornada
  será um array com todas as resolve dentro.
*/



Promise.all(promises)
  .then((values) => {
    console.log(values);
  }).catch(error => console.log(error)) 




// Promise.race
/*
  O Promise.race é semelhante ao Promise.all. Ele recebe um 
  array de promises, entretando a promise retornada é a que 
  resolveu ou rejetou mais rápido  
*/

Promise.race(promises)
  .then((values) => {
    console.log(values);
  })
  .catch(error => console.log(error))




// Promise.resolve
/*
  O Promise.resolve pode ser bem util quando tenho uma 
  função que retorna uma promise e caso eu já tenha o que
  quero, se torna inutil chamar a promise para resolver dnv


  ex: caso eu tenha uma função baixarPagina que baixa uma
  página e a deixa em cache. Se eu já tiver baixado, basta 
  retornar a promise já resolvida (Promise.resolve)
*/


function baixaPagina() {
  const emCache = true;

  if(emCache){
    return Promise.resolve('Página em cache')
  } else{
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosDaPagina => console.log(dadosDaPagina))
  .catch(e => console.log(e))