const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Nascimento',
    idade: 21,
    endereco: {
        rua: 'AV Brasil',
        numero: 320
    }
};

//atribuição via desestruturação

//dando nome as variaveis que recebem os atributos e passando default value
// cont {nome: teste = 'default', ...resto};
const {nome, ...resto } = pessoa;

console.log(resto);