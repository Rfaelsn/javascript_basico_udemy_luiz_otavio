//criando objetos e mostrando suas chaves

const pessoa ={
    nome: 'Rafael',
    sobrenome: 'Nascimento',
    idade: 21,
    falarNome(){
        return (`${this.nome} está falando seu nome`);
    },
    getDataNascimento(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

console.log(pessoa.nome);// quando a chave é fixa
console.log(pessoa['sobrenome']);//quando a chave é dinamica e virá de outra parte do codigo
const chave = 'idade';
console.log(pessoa[chave]);

//criando objeto com construtor
const pessoa2 = new Object();
pessoa2.nome = 'Rafael';
pessoa2.sobrenome = 'Nascimento';
pessoa2.idade = 21;
pessoa2.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
};

pessoa2.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

//vendo as chaves de um objeto e seus valores:
for (const chave in pessoa2) {
    console.log(`chave: ${chave}  --> valor: ${pessoa2[chave]}`);
}

// console.log(pessoa2.getDataNascimento());
// delete pessoa2.idade; //deletando chave de um objeto


