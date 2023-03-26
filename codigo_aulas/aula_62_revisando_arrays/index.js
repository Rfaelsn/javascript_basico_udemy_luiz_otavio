//revisando arrays
//arrays são valores por referência

//transforma um array em uma string
const nomes = [ 'Rafael', 'Silva', 'do', 'Nascimento' ];
const nome = nomes.join(' ');
console.log(nome);



//transformando string em um array
// const nome = 'Rafael Silva do Nascimento';
// const nomes = nome.split(' ');
// console.log(nomes);


// const nomes = ['Rafael', 'João','Carlos','Maria'];

//"corta" o array. pegando o indice de inicio e final (final não incluido na exibição)
// const novo = nomes.slice(1, -1);
// console.log(novo);


//copia os dados de um array para a constante
// const copia = [...nomes];

//adiciona no final do array
// copia.push('Joana');

//adiciona elemento no começo do array
// copia.unshift('Mariana');

//removendo do final e mostrando o item removido
// const itemRemovido = nomes.pop();

//removendo item do começo
// const itemRemovido = nomes.shift();

//inserindo item no final


//criando array usando new
// const array = new Array('Rafael', 'João');

//deletando sem apagar a posição do array
// delete array[0];

//apagando da ultima posição o valor e indice
// array.pop();
