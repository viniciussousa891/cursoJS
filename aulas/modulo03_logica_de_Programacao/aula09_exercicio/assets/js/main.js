function calcular() {

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    let imc = peso / (altura ** 2);
    imc = Number(imc.toFixed(2));

    if (peso === 0) { //verifica se foi digitado valores para executar o calculo
        resultado.innerText = `Peso inválido`;
    } else if (altura === 0){
        resultado.innerText = `Altura inválida`;
    } else{ // Executa o calculo do IMC e imprime no documento o resultado
        if (imc < 18.5) {
            resultado.innerText = `Seu IMC é ${imc} (Abaixo do peso)`;
        } else if (imc > 18.5 && imc < 24.9) {
            resultado.innerText = `Seu IMC é ${imc} (Peso normal)`;
        } else if (imc > 25 && imc < 29.9) {
            resultado.innerText = `Seu IMC é ${imc} (Sobrepeso)`;
        } else if (imc > 30 && imc < 34.9) {
            resultado.innerText = `Seu IMC é ${imc} (Obesidade grau 1)`;
        } else if (imc > 35 && imc < 39.9) {
            resultado.innerText = `Seu IMC é ${imc} (Obesidade grau 2)`;
        } else if (imc > 40) {
            resultado.innerText = `Seu IMC é ${imc} (Obesidade grau 3)`;
        }
    }
}