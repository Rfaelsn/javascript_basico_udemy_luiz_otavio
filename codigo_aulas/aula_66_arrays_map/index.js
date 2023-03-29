//map retorna novo array com base no original com modificações
//o array retornado sempre possui o mesmo tamanho do array original
// não altera o array original
const numeros = [5, 50 , 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosEmDobro = numeros.map((valor) => valor*2);

console.log(numerosEmDobro);


//recebe os mesmos 3 parâmetros que a filter
// const numerosEmDobro = numeros.map((valor,indice,array) =>{
//     console.log(valor,indice,array);
// })
