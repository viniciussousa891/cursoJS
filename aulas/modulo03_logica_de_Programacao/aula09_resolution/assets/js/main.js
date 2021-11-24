const form = document.querySelector('#formulario');

// Parar o evento de submit do formulário
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) { // Testar se foi digitados algo no input peso
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) { // Testar se foi digitados algo no input altura
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // Calcular IMC
    const nivelImc = getNivelImc(imc); // Definir nivel do IMC

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']; 
    
    if (imc < 18.5) return nivel[0];
    if (imc > 18.5 && imc < 24.9) return nivel[1]; 
    if (imc > 25 && imc < 29.9) return nivel[2];
    if (imc > 30 && imc < 34.9) return nivel[3];
    if (imc > 35 && imc < 39.9) return nivel[4];
    if (imc > 40) return nivel[5]; 
}

function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

// cria paragrafos
function criap () {
    const p = document.createElement('p');
    return p;
}

// Imprimir resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criap();

    if (isValid){
        p.classList.add('resultado-valido');
    } else {
        p.classList.add('resultado-invalido');
    }
    p.innerText = msg;
    resultado.appendChild(p);
}
