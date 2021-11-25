/* ESCOPO LEXICO */
// Escopo é a acessibilidade de objetos, variáveis e funções 
// em diferentes partes do código.

// Em outras palavras, o que determina quais são os dados que 
// podem ser acessados em uma determinada parte do código é 
// o escopo.

const nome = "Vinicius";

/* Nessa situação, note que a função falaNome irá buscar a 
variavel nome nos escopos que ela possui acesso. Estes escopos
são: o proprio escopo dela e o que está fora dela (nese caso, o
global) */

/* Ela não possui acesso no escopo da função usaFalaNome */
function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Sousa';
    falaNome();
}

usaFalaNome();
