//retorne um array com apenas o nome das pessoas
//remova as chaves nome do objeto
//adicione uma chave id em cada elemento

const pessoas = [
    {nome:'Luiz', idade:61},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
];

//array com apenas o nome das pessoas
const nomes = pessoas.map(pessoa => pessoa.nome);

//array com objetos sem a chave nome
//forma mais simples
//para que as chaves não faça o papel de escopo da função a envolvemos com parenteses
const idades = pessoas.map(pessoa => ({idade: pessoa.idade}));

// const idades = pessoas.map(pessoa =>{
//     return {idade: pessoa.idade};
// });

//ou
// const idades = pessoas.map(pessoa =>{
//     delete pessoa.nome;
//     return pessoa;
// });

//adicionando chave id a cada objeto
// não altera lista de objetos original pois usamos spread operator para copiar objetos
const objsComId = pessoas.map((pessoa, indice) =>{
    const novaPessoa = {...pessoa}; //copia o objeto
    novaPessoa.id = indice;
    return novaPessoa;
});

//adiciona id na lista de objetos original pois objetos são valores passados por referencia
// const objsComId = pessoas.map((pessoa, indice) =>{
//     pessoa.id = indice; //cria nova propriedade para o objeto
//     return pessoa;
// });

console.log(nomes);
console.log(idades);
console.log(pessoas);
console.log(objsComId);
