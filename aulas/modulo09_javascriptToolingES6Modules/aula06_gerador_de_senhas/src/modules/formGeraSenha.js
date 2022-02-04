import geraSenha from "./geradores";

const qtdeChar = document.querySelector('#qtde-char');
const addNum = document.querySelector('#add-num');
const upperCase = document.querySelector('#upper-case');
const lowerCase = document.querySelector('#lower-case');
const symbols = document.querySelector('#symbols');

const senha = document.querySelector('.senha');
const btnGeraSenha = document.querySelector('#gerar-senha');

export default () => {

  btnGeraSenha.addEventListener('click', () => {
    if (qtdeChar.value !== '') {
      let senhagerada = geraSenha(qtdeChar.value, upperCase.checked, lowerCase.checked, addNum.checked, symbols.checked);
      if(senhagerada !== '') senha.innerText = senhagerada;
    }
  });
}