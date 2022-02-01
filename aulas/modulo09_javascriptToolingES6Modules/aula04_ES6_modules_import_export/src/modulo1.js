// Para usar o export em constantes, eu não consigo
// exportar direto da constante, preciso exportar na expressão
// no final do arquivo: 

// ---> export {nome as default}

const nome = 'Vinícius';
const sobrenome = 'Sousa';
const idade = "20";

// É possivel exportar diretamente do local 
// que voce deseja exportar

// Exportando como padrão (default)

// quando um dado é exportado com default, no momento 
// de import, eu posso definir qualquer nome (sem usar o "as")
// que ele pegará o dado default na importação

// OBS: O default não usa {} na importação
export default (x, y) => x + y;


export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export { nome as nome2, sobrenome, idade };
// No momento da exportação, eu também posso mudar o nome
// da variavel a ser exportada -> nome as nome3