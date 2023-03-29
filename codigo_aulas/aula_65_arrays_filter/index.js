//filter sempre retorna um array com a mesma qtd de elementos ou menos
const numeros = [5, 50 , 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//passando função anonima ou arrow function utilizando os 3 parâmetros
const numerosFiltrados = numeros.filter((valor,indice,array) =>{
    console.log(valor,indice,array);
    return valor > 10;
});

console.log(numerosFiltrados);



//sintaxe mais simples arrow function
// const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

//com função callback separada
// function funcaoCallBack(valor){
//     return (valor > 10);
// }

// const numerosFiltrados = numeros.filter(funcaoCallBack);

// console.log(numerosFiltrados);


//função callback recebe 3 parâmetros do filter
// function funcaoCallBack(valor,indice,array){
//     return (valor > 10);
// }