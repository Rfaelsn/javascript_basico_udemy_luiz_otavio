function criaMultiplicador(multiplicador){
    // multiplicador fica "salvo nesse escopo"    
    return function(n){
        return n * multiplicador;
    }
}

// fazendo isso as funções irão setar na função interna um multiplicador
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

//quando chamarmos a função ja passaremos apenas o valor de n
//pois a função se lembra de seu escopo e do valor do multiplicador
console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(10));

// com retono de objeto
// chaves com nome diferente dos parâmetros
// function criaPessoa(nome, sobrenome) {
//     return{nome2:nome, sobrenome2: sobrenome}
// }

//js ja entende que deve criar a chave com o nome e valor do parâmetro
// function criaPessoa(nome, sobrenome) {
//     return{nome, sobrenome}
// }


// const pessoa = criaPessoa('Rafael','Nascimento');

// const pessoa2 ={
//     nome: 'Rafael2',
//     sobrenome: 'Rafael2',
// }

// console.log(pessoa, pessoa2);

//funções com retorno
// function comRetorno(a, b){
//     return a+b;
// }

// const result = comRetorno(2,5);

// console.log(result);


// sem retorno 
// function semRetorno(a, b){
//     console.log(a+b);    
// }

// semRetorno(2,5);



