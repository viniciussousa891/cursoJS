function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Valor Inválido');
    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}

esperaAi('Frase 01', rand(1, 5))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 02', rand(1, 5));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 03', rand(1 ,3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(1, rand(1,3))
  })
  .catch(erro => {
    console.log(erro);
  });
