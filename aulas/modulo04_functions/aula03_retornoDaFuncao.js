/* Função que retorna outra função */
function criaMultiplicador(multiplicador) {
    return (n) => n * multiplicador;
}
/* Como a funçao criaMultiplicador retorna ua função, então as contasntes se tornam funções */
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
