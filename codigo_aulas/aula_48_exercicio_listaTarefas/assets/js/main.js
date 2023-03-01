const inputTarefas = document.querySelector('.input-tarefa');
const btnAddTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.lista-tarefas');


btnAddTarefas.addEventListener('click',() =>{
    if(!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
});

document.addEventListener('click',function(e){
    const elemento = e.target; 
    if(elemento.classList.contains('btn-apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

document.addEventListener('keypress',function(e) {
    if(e.key === 'Enter'){
        if(!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);
    }
});

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    criaBotaoApagar(li);
    tarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
};

function criaBotaoApagar(li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    //cria um atributo html e define o seu valor
    btnApagar.setAttribute('class', 'btn-apagar');
    btnApagar.setAttribute('title', 'Apagar tarefa');

    li.appendChild(btnApagar);
}

function limpaInput(){
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    let listaTarefas = [];

    for (let tarefa of liTarefas) {
        tarefa = tarefa.innerText.replace('Apagar', '').trim();
        listaTarefas.push(tarefa);
    }

    const tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
