/* Essa aula é uma demonstração de como o babel funciona */

const nome = 'Luiz'
const obj = {nome}
const novoObj = {...obj}
console.log(novoObj)


// Comando para o babel transformar esse arquivo em 
// uma versão mais antiga que funcione nos navegadores
// mais antigos

/* npx babel main.js -o bundle.js --presets=@babel/env  */