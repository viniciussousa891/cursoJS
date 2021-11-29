/* Funções imediatas são funções que 
são executadas logo após serem criadas */


// Esse tipo de função não toca o escopo global, portanto
// não acontece conflito de duas variaveis de nomes iguais
// derem erro.

(function(){
    const nome = "Vinicius";    

    // Essa função não consegue do escopo da função imediata
    function falaNome(nome){
        console.log(nome);
    };

    falaNome(nome);

})();

const nome = "Luiz";
