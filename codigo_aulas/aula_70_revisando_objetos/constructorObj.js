function Pessoa(nome, sobrenome){
    //const/let cria variaveis e constantes privadas dentro de uma função construtora
    const id = 1;
    //publicas
    this.nome = nome;
    this.sobrenome = sobrenome;

    //define que nenhum objeto desse construtor poderá ser alterado
    // Object.freeze(this);
}

const p1 = new Pessoa('Rafael', 'Nascimento');
// Object.freeze(p1); // não permite alterações em um objeto após ser instanciado
p1.nome = 'Rafael2';//permitido
// p1 = 'valor'; // não permitido
console.log(p1);
console.log(p1.id);//undefined