//retornar a pessoa com a maior idade:
const pessoas = [
    {nome:'Luiz', idade:61},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:82},
    {nome:'Wallace', idade:47},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) =>{
    if (acumulador.idade > valor.idade) {
        return acumulador;
    }

    return valor;
});

console.log(pessoaMaisVelha);
