function funcao(parametro) {
    console.log(`${parametro}`);
}

funcao(15);


/* Quando a função é definida a função com a palavra function,
é disponivel pelo JS em um objeto arguments todos os
argumentos enviados para a função*/
function argumentos(){
    console.log(arguments);
}

argumentos("texto",1,2,3,4,4,5,6,);


/* Isso é poderoso pois posso usar
 todos os argumentos para fazer algo */

/* Função usando o arguments */

function soma(){
    let result = 0;

    for(let argumento of arguments){
        result += argumento;
    }
    return result;
}

let somatorio = soma(1,2,3,4,5,6,7,8,9,10);
console.log(`soma = ${somatorio}`);