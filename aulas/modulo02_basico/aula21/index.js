let num = Number(window.prompt('Digite um número:'))
let texto = document.getElementById('Title')
console.log(num)
texto.innerHTML =
 `<h1>Seu número é ${num}</h1>
  <p>Raiz quadrada: ${Math.sqrt(num)}</p>
  <p>${num} é inteiro: ${translate(Number.isInteger(num))}</p>
  <p>É NaN: ${translate(Number.isNaN(num))}</p>
  <p>Arredondando para baixo: ${Math.floor(num)}</p>
  <p>Arredondando para cima: ${Math.ceil(num)}</p>
  <p>Com duas casas decimais: ${num.toFixed(2)}</p>`


function translate(num) {
    if (num == true) {
        return 'Verdadeiro'
    } else {
        return 'Falso'
    }
}