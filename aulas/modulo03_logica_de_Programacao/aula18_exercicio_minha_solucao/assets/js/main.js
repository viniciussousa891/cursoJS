const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

function criaBloco() {

    const bloco = document.querySelector('.container'); /* Capturar o container */
    const div = criaDiv(); /* Cria div */
    bloco.appendChild(div); /* Adiciona div no bloco */

    for(let i = 0; i < elementos.length; i++){
        let tag = document.createElement(elementos[i].tag);
        let texto = elementos[i].texto;

        tag.innerText = texto;
        div.appendChild(tag);

    }

}

function criaDiv () {
    const div = document.createElement('div');
    return div;
}

criaBloco();

