function funcao ([valor1, valor2, valor3, ...resto]){
    console.log(valor1, valor2, valor3, resto);
}

funcao(['1', '2', '3', '4' , '5'])

// atribuição via desestruturação de objetos em funções //
// function funcao ({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }

// const obj ={
//     nome: "Rafael",
//     sobrenome: "Nascimento",
//     idade:21
// }
// funcao(obj);


// atribuindo valor padrão a parâmetros e setando propositalmente o valor padrão de um parâmetro//
// function funcao (a, b = 2, c = 4){
//     console.log(a + b + c);
// }

// funcao(2, undefined, 10);


//  Mais parâmetros que argumentos    //
// function funcao (a, b, c, d, e, f){
//     console.log(a,b,c,d,e,f);
// }

// funcao(1, 2, 3);



//arguments sustenta todos os argumentos enviados
// function funcao (a, b, c){
//     let total = 0;

//     for (const argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }
