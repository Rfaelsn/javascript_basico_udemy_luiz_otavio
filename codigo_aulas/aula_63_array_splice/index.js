//splice
//               0        1       2        3
//              -4       -3      -2       -1
const nomes = ['Luiz', 'Caio', 'Rafael','João'];

//adicionando no meio do array
nomes.splice(2,0,'Otávio','Pedro');
console.log(nomes);

// argumentos do aplice: (indice de inicio/atual,quantidade de removidos, adição de elementos)
//splice retorna um array
// const removidos = nomes.splice(2,2);
// console.log(removidos);

//reproduzindo o shift
// const removidos = nomes.splice(0,1);
// console.log(removidos);

//reproduzindo o unshift
// const removidos = nomes.splice(0,0,'Rafael programador');
// console.log(removidos);

//reproduzindo o pop()
// const removidos = nomes.splice(-1,1);
// console.log(removidos);

//reproduzindo o push
//usar o push é mais facil
// const removidos = nomes.splice(nomes.length,0,'Rafael Programador');
// console.log(removidos);