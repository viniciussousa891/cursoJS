/* fetch('pessoas.json')
  .then(response => response.json())
  .then(json => carregaElementos(json))
  .catch(e => console.error(e)) */

axios('pessoas.json')
  .then(response => carregaElementos(response.data))

function carregaElementos(json){
  const table = document.createElement('table')
  for(let pessoa of json){
    const tr = document.createElement('tr');

    let td = document.createElement('td')
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td')
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td')
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);
    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table)
}