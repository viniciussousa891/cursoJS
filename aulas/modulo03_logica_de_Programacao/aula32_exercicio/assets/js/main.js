const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

/* Funcao para criar li's */
function CriaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

/* Cria uma botao em uma li para poder apagar futuramente os itens de uma lista */
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';

    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

/* Limpar input*/
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

/* Funcao para criar a tarefa */
function criaTarefa(textoInput) {
    const li = CriaLi();

    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

/* Capturar evento de click no button */
btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});


/* Apagar tarefas */
document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

/* salvar tarefas */
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();