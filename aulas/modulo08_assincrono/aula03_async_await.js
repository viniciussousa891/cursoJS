function rand(min = 0, max = 3){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string'){
      reject(`Valor Inválido`);
      return;
    } 

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo)
  });
}

/* FORMA COM PROMISES E THEN/CATCH */
/* 
esperaAi('fase 1', rand())
  .then((valor) => {
    console.log(valor);
    return esperaAi('Fase 2', rand())
  })
  .then(valor => {
    console.log(valor);
    return esperaAi('Fase 3', rand());
  })
  .then((valor) => {
    console.log(valor);
  })
  .catch(e => console.log(e));

 */
/* FORMA COM ASYNC/AWAIT */

async function executa() {
  console.log('\nASYNC\n')

  try {
    const fase1 = await esperaAi('fase 1', rand())
    console.log(fase1);

    const fase2 = await esperaAi('fase 2', rand())
    console.log(fase2);
 
    const fase3 = await esperaAi('fase 3', rand())
    console.log(fase3);
  } catch(e)  {
    console.log(e);
  }
}

executa();