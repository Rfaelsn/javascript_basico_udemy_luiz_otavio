//array dentro de array:
const numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const [,[, , seis]] = numeros;
const [lista1, lista2, lista3] = numeros;

console.log(lista2[2]);


// atrib por desestruturação em arrays
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [, dois, tres, ...resto] = numeros;

// console.log(dois, tres);
// console.log(resto);

// const numeros = [1000, 3000];
// const [um, dois = 2 ] = numeros;

// console.log(dois);



//relembrando um exercicio do inicio do curso
// let a = 'A';//B
// let b = 'B';//C
// let c = 'C';//A

// const letras = [b, c, a];

// console.log(letras);
