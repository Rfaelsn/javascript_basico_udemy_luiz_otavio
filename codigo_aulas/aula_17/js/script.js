//                0          1         2            3      4
const nomes = ['Rafael', 'Kerssia', 'suzi']; // samanta fatima
nomes.push('samanta');
nomes.push('Fátima');

console.log(typeof nomes);
console.log(nomes instanceof Array);

// console.log(nomes.slice(0,-1)); // cortando o array

// console.log(nomes[50]);

// delete nomes[0];

// nomes.pop(); remove do final do array
// const removido = nomes.shift(); remove do começp
// console.log(`o nome : ${removido} foi removido do array`);

// nomes.unshift('Samanta'); adiciona no começo
// nomes.unshift('Fátima');

// nomes[nomes.length] = 'Samanta'; // inserindo no final por indice
// nomes[nomes.length] = 'Fátima';

// nomes[3] = 'samanta'; // passando um indice com a posição posterior para criar a nova posição
// console.log(nomes);