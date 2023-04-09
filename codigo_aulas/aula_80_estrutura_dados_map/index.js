const pessoas = [
    {id: 3 , nome: 'Luiz'},
    {id: 2 , nome: 'Maria'},
    {id: 1 , nome: 'Helena'},
]

//reordena do maior para o maior
// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

//mantem a ordem original recebida de pessoas[];
//estrutura que recebe chave e valor
const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const {id} = pessoa;

    //recebe chave e valor
    novasPessoas.set(id, {...pessoa});
}

//atrib via desestruturação no for em map 
for (const [identifier, {id,nome}] of novasPessoas) {
    console.log(identifier, id , nome);
}

//mantém ordem original e chaves continuam number
console.log(novasPessoas);
//pegando objeto no map pela key
console.log(novasPessoas.get(1));

// deletando objeto no map via key.
novasPessoas.delete(1);
