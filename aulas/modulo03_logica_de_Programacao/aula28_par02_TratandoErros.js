/* Ele tentará executar a primeira parte (dentro do bloco try), caso ele não consiga por causa de algum erro, o bloco catch será executado */

try {
    console.log(naoExisto);
} catch(error) {
    console.log('naoExisto não existe'); // Não se deve exibi o erro para o usuario;
    console.log(error)
}


/* Lancar erros */


function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log('Alguma coisa mais amigável pro usuário');
}



/* Finaly */


try {
     
} catch(error) {
    // É executada quando há erros
} finally {
    // Sempre
}

