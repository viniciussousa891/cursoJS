/* EXEMPLO */
function retornaHora(data) {
    if(data && !(data instanceof Date)) { // Testa se foi enviado uma data e se a data enviada é uma instância de Date
        throw new TypeError('Esperando instância de Date');
    }

    if(!data) { // Caso não seja enviado uma data, cria data
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        second: '2-digit',
        minute: '2-digit'

    });
}

try{
    const hora = retornaHora();
    console.log(hora)
} catch(e){
    // Tratar erro
} finally {
    console.log('Tenha um bom dia');
}
