const pessoa1 = {
    nome: 'Rafael',
    sobrenome: 'Silva do Nascimento',
    idade: '21',

    falaIdade(){
        console.log(`minha idade atual é ${this.idade} anos`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.falaIdade();
pessoa1.incrementaIdade();  
pessoa1.falaIdade();




// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade }
// }

// const pessoa1 = criaPessoa('Rafael', 'Silva do Nascimento', '21');
// console.log(pessoa1.nome);

// const pessoa1 = {
//     nome: 'Rafael',
//     sobrenome: 'Silva do Nascimento',
//     idade: '21'
// }

// console.log(pessoa1.nome);