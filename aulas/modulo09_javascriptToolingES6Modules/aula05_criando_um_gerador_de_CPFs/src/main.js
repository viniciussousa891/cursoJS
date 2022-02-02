import GeraCPF from "./modules/GeraCPF";

import './assets/css/style.css';

function criaCPF(){
  const gera = new GeraCPF;
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCPF();
}

const cria = document.querySelector('.cria');
cria.addEventListener('click', (e) => {
  criaCPF();
});
