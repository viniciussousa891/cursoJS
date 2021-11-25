/* CLOSURES */

/* 
   Um closure (fechamento) é uma função que se "lembra" do 
   ambiente — ou escopo léxico — em que ela foi criada. 
*/

/* Nesse caso, a função anonima declarada dentro da função
retornaFuncao é um closure, e ela consegue acessar o ambiente
dela, ou seja, a variavel nome de valor "Vinicius" */

function retornaFuncao() {
    const nome = "Vinicius";
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao()); 