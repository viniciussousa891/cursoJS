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



/* Paarametro pre-definido */

/* Dessa forma, caso o valor de b não seja enviado, 
a conta ainda será executada */
function soma02(a, b = 0){
    console.log(a  + b);
}

soma02(1);


/* Atribuição via desestruturação (tanto para objeto quanto para array)*/
function soma03({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

soma03({nome: "Vincius", sobrenome: "Carvalho", idade: 19});


/* Usando rest operator */
/* com ele, é possivel armazenar em um array todos 
os outros valores digitados */

function soma04(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}

soma04("-", 1000,1,5,6,7,84,5,4);