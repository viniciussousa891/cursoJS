function validaCPF(cpf) {
  let cpfLimpo = cpf.replace(/\D+/g, ''); // remove todo carctere que não seja um numero
  cpfLimpo = Array.from(cpfLimpo); // transforma a strign em um array de caracteres

  let digitos = cpfLimpo.slice(0, 9);

  calculaCPF(digitos);

  for(let i = 0; i < cpfLimpo.length; i++){
    if(cpfLimpo[i] !== digitos[i]){
      console.log("CPF inválido");
      return;
    }
  }

  console.log("CPF válido");
}

function calculaCPF(digitos) {

  digitos.length > 9 ? mult = 11 : mult = 10;

  let soma = digitos.reduce((ac, valor) => {
    let num = Number(valor) * mult;
    mult--;
    return ac += num;
  }, 0);

  let resultado = String(11 - (soma % 11));
  if (resultado > 9) resultado = 0;

  digitos.push(resultado);

  if(digitos.length == 11) {
    return;
  } else{
    calculaCPF(digitos);
  }
}

let cpf = "066.165.403-67"; 

validaCPF(cpf);