//desta forma pegamos apenas o primeiro elemento da estrutura de classe paragrafos
const divParagrafos = document.querySelector('.paragrafos');

//para pegar uma  lista de elementos (nodeList):
const paragrafos = divParagrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
    p.style.backgroundColor = backGroundBody;
    p.style.color = '#fff';
}