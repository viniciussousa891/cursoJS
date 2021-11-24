/* As funções declaradas dessa forma recebem
o function hoisting (elas são elevadas no JS) */
function falaOi(){
    console.log("Oi!");
}

falaOi();

/* Função é um objeto de primeira classe no JS */
/* A função pode ser tratada no JS como dado */
const souUmDado = () => console.log("Sou um dado!");

souUmDado();


/* Passando uma função como parametro e executando */
function executaFunção(funcao, parametro){

    if(typeof(funcao) === "function"){
        funcao(parametro);
    }else {
        console.log("O parametro não é uma função");
    }
}

const mostraNome = (nome) => console.log(`Seu nome é ${nome}`);

executaFunção(mostraNome, "Vinícius de Sousa Carvalho");

/* Arrow function */
const arrow = () => {console.log("Sou uma arrow function");}

/* Função dentro de um objeto (metodo de um função) */
const obj = {
    falar() {
        console.log("estou falando");
    }
}

obj.falar();