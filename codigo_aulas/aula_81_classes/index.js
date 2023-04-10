//classes definem métopdos direto em seu respectivo prototype
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando !`);
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = () => {
    console.log(`${this.nome} está falando !`);
}

const pessoa1 = new Pessoa('Rafael', 'Nascimento');
const pessoa2 = new Pessoa2('Rafael2', 'Nascimento');

console.log(pessoa1);
console.log(pessoa2);
